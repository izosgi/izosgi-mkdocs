
!!! info "WORK in PROGRESS"
    We are working to get this site ready asap

Currently several applications use R scripts to either compute or analyse the results of your jobs.
Altough the R installation in ARINA already includes several libraries, we can not store all of them under the root directory. 

In order to have a clean installation of your libraryes, we strongly recommend to follow the steps below:  

## **Step 1 : Initialize an interactive session**

The first step one must do is to start an interactive session to a compute node, since it is not allowed to load modules in the login nodes.

For that purpose, one use the  **[``interactive``](/jobs/interactive)** command.

``` bash 
    [user@agamede:~]$ interactive  -n 1 -m 3 -J r-env 
    Running salloc command: 
    /usr/bin/salloc  -n 1 -c 1 --mem-per-cpu=3072 -J conda-env -p vfast -t 4:00:00     
    salloc: Pending job allocation 419547
    salloc: job 419547 queued and waiting for resources
    salloc: job 419547 has been allocated resources
    salloc: Granted job allocation 419547
    salloc: Waiting for resource configuration
    salloc: Nodes na06 are ready for job
    [user@na22:~]$ 

```
## **Step 2 : Installing local libraries**

After the login into an interactive session, the user must load the R version he/she needs. 
Currently, several version are installed in the cluster. Using the command  ```module available R/``` the user can see the different modules installed on the cluster. 

!!! info "Searching modules"
    In the cluster, there are several applications that finish by the letter "r" , so the command ```module avail R/``` will also output them.
    To check for an specific version of R language, check under the section **``/eb/x86_64/modules/lang``** 

Once the module is loaded, an environment variable ```R_LIBS_USER=/gscratch/$USER/.R/{version}-{compiler}-{version}/default/library``` is set in order to add this path for the libraries needed for the $USER . 

```bash
[user@na22:~]$ module load R/4.4.1-gfbf-2023b
[user@na22:~]$ R

R version 4.4.1 (2024-06-14) -- "Race for Your Life"
Copyright (C) 2024 The R Foundation for Statistical Computing
Platform: x86_64-pc-linux-gnu

R is free software and comes with ABSOLUTELY NO WARRANTY.
You are welcome to redistribute it under certain conditions.
Type 'license()' or 'licence()' for distribution details.

  Natural language support but running in an English locale

R is a collaborative project with many contributors.
Type 'contributors()' for more information and
'citation()' on how to cite R or R packages in publications.

Type 'demo()' for some demos, 'help()' for on-line help, or
'help.start()' for an HTML browser interface to help.
Type 'q()' to quit R.

> .libPaths()
[1] "/beegfs_agamede/gscratch/user/.R/4.4.1-gfbf-2023b/default/library"                                  
[2] "/software-nas/eb2024/easybuild/software/rocky/8.9/amd/zen4/software/R/4.4.1-gfbf-2023b/lib64/R/library"
> 
```

The R command **```.libPaths()```** confirms that the user library paths is correctly set up. 

In order to install now the desired libraries, exist several options depending on the library source.

=== "CRAN mirror" 
    If the package is in a standard repository, you can directly use:  
    ```bash
    > install.packages("package_name")
    ```
    
    !!! example "Example"
        ```bash
        > install.packages("devtools")
        Installing package into '/beegfs_agamede/gscratch/user/.R/4.4.1-gfbf-2023b/default/library'
        (as 'lib' is unspecified)
        also installing the dependencies 'curl', 'rprojroot', 'httr2', 'ragg', 'yaml', 'evaluate', 'jsonlite', 'processx', 'ps', 'R6', 'waldo', 'usethis', 'cli', 'fs', 'miniUI', 'pkgbuild', 'pkgdown', 'pkgload', 'profvis', 'rlang', 'roxygen2', 'sessioninfo', 'testthat', 'withr'

        trying URL 'https://cran.r-project.org/src/contrib/curl_7.0.0.tar.gz'
        Content type 'application/x-gzip' length 731109 bytes (713 KB)
        ==================================================
        downloaded 713 KB
        ...
        ** building package indices
        ** installing vignettes
        ** testing if installed package can be loaded from temporary location
        ** testing if installed package can be loaded from final location
        ** testing if installed package keeps a record of temporary installation path
        * DONE (devtools)

        The downloaded source packages are in
            '/tmp/RtmpSaRTBy/downloaded_packages'
        Warning message:
        In install.packages("devtools") :
        installation of package 'ragg' had non-zero exit status

        ```

=== "Web repository" 
    If the package is in a specific webpage repository, you can directly use:  
    ```bash
    >  install.packages(' package_name', repos='http_address')
    ```
    
    !!! example "Example"
        ```bash
        >install.packages("furrr", repos = "http://cran.us.r-project.org", dependencies = TRUE)
        Installing package into '/beegfs_agamede/gscratch/user/.R/4.4.1-gfbf-2023b/default/library'
        (as 'lib' is unspecified)
        also installing the dependencies 'lazyeval', 'parallelly', 'codetools', 'lobstr', 'rex', 'generics', 'lifecycle', 'vctrs', 'future', 'globals', 'carrier', 'covr', 'dplyr', 'listenv', 'tidyselect'

        trying URL 'http://cran.us.r-project.org/src/contrib/lazyeval_0.2.2.tar.gz'
        Content type 'application/x-gzip' length 83482 bytes (81 KB)
        ==================================================
        downloaded 81 KB
        ...
        ** testing if installed package can be loaded from temporary location
        ** testing if installed package can be loaded from final location
        ** testing if installed package keeps a record of temporary installation path
        * DONE (furrr)

        The downloaded source packages are in
            '/tmp/RtmpSaRTBy/downloaded_packages'

        ```
=== "GitHub/GitLab"
    You can also install libraries from a GitHub/GitLab repository. It requires ```install.packages(devtools)``` to be installed first.

    ```bash
    library(devtools)
    install_github("package_name")
    ```

    !!! example "Example"
        ```bash
        >
        ```

After finishing the installation of your environment, you can check that the libraries are installed by doing: 

```bash
    > library(package_name)
```

Once all libraries are installed, you have to quit the interactive session just closing the SHELL session as usal. 

!!! example "Exit interactive session"

    [user@na22:~]$ exit
    salloc: Relinquishing job allocation 425364                                                                                                                                                   
    salloc: Job allocation 425364 has been revoked.
    [user@agamede1:~]$ 

## Step 3 : Using Environments on production jobs

In order to be able to use a user installed libraries for production jobs, you just need to load the corresponding module in your BATCH script before executing the commands or python scripts. 

A batch script example for R script submission can be constructed using the example [SLURM script for R ](/jobs/batch_scripts/#example-slurm-script-slurmsl){target=blank} 

The user then will need to choose the R module to be loaded and define properly the Rscript to execute.

Alternatively, the user can find an example in the cluster at  /home/users/slurm/batch-scripts/R/Rmpi.sl
In that case, the user will only need to modify the requested resource and specify the Rscript file to be executed.  

!!! example "Batch script for R execution" 
    ```bash
     #!/bin/bash
        #SBATCH --nodes=2
        #SBATCH --ntasks-per-node=4
        #SBATCH --time=01:00:00
        #SBATCH --partition=p_fast
        #SBATCH --mem=8G

        ## ------------------------------------------------------------------- ##
        ## -------------- Input Section: TO BE MODIFIED by USER -------------- ##

        #  Required input files for the software execution, separated by a space
        #  Example: files="rmpi_test.R"
        files="rmpi_test.R"
        ...
        #  LOAD REQUIERED MODULE/S
        echo $'\n'"Load requiered module/s"
        echo "module load R"
        module load R   # specify here the version if needed
        ...

    ```