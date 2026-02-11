
!!! info "WORK in PROGRESS"
    We are working to get this site ready asap



Currently several applications use python scripts to either compute or analyse the results of your jobs.
Since pyhton requires a wide list of libraries, we can not store all of them under the root directory. 

In order to have a clean installation of your enviromnet, we strongly recommend to follow the steps below:  

## **Step 1 : Initialize an interactive session**

The first step one must do is to start an interactive session to a compute node, since it is not allowed to load modules in the login nodes.

For that purpose, one use the  **[``interactive``](/jobs/interactive)** command.

``` bash 
    [user@agamede:~]$ interactive  -n 1 -m 3 -J conda-env 
    Running salloc command: 
    /usr/bin/salloc  -n 1 -c 1 --mem-per-cpu=3072 -J conda-env -p vfast -t 4:00:00     
    salloc: Pending job allocation 419547
    salloc: job 419547 queued and waiting for resources
    salloc: job 419547 has been allocated resources
    salloc: Granted job allocation 419547
    salloc: Waiting for resource configuration
    salloc: Nodes na06 are ready for job
    [user@na06:~]$ 

```

!!! warning " Memory issue "

    ***Miniforge3*** needs a bit more memory to run **```conda```** command than *Miniconda3*. 
    The memory allocated by the default '''interactive''' command is 1GB/cpu which is not sufficient. 
    If you encountered issue when creating the environment, just increase the requested memory on the interactive command, like: **``` interactive -m 3 ```** to request for 3GB / cpu. 
    

## **Step 2 : Work with Environment Manager**

Historically, the most common python package manager was [*Anaconda*](https://anaconda.org/){target=blank}, but recent changes in its Licensing Terms requires the research organizations,  regardless of whether the organization is commercial, government, or non-profit, must purchae an Enterprise license. 

*Anaconda* can still be used for free when the software is used for *non-commercial educational purposes* such as teaching, learning, and research within courses.

For that reason, we strongly use open-source alternatives such as [*conda-forge*](https://conda-forge.org/){target=blank} or native [*Python virtual environments*](https://docs.python.org/3/library/venv.html){target=blank}. 

Here below, we will show how to install your own python environment using ***conda-forge*** and the native *```python venv```* command.

!!! danger "Selecting environment directory" 
    By default conda and python uses the /home/$USER directory to store the environments. Due to space limitattions in the /home file system (and [prices](/prices){target=blank}), we strongly recommend to use the [**Parallel File System**](/hardware/filesystems/){target=blank} (aka /gscratch). 
    **Note:** Try to use the file system which fits the best node architecture, and use the full path route to assign the environment: e.g. ```/beegfs_agamede/gscratch/$USER/conda/envs/myenv ``` 

=== " ***conda-forge***"
    In order to use the commands needed to install the python libraries stored in the conda-forge repository, one have to load the Miniforge3 module. 

    ``` bash
        [user@na06:~]$ module load Miniforge3
    ```
    Once loaded you can create your one environment with the desired python version. 
    The python environment

    ``` bash
        [user@na06:~]$ conda create -p /beegfs_agamede/gscratch/$USER/conda/env/newenv python=3.12
        Retrieving notices: done
        Channels:
        - conda-forge
        Platform: linux-64
        Collecting package metadata (repodata.json): | 
        ...
        Proceed ([y]/n)? y

        Downloading and Extracting Packages:
        Preparing transaction: done  
        Verifying transaction: done                      
        Executing transaction: done 
        #                                                                                                                   
        # To activate this environment use                                     
        #
        #     $ conda activate /beegfs_agamede/gscratch/qjornet/conda/env/newenv 
        #
        # To deactivate an active environment, use
        #
        #     $ conda deactivate

    ```
    Then in order to start installing libraries, you first need to load the conda environment: 
    ``` bash
        [user@na06:~]$ conda activate /beegfs_agamede/gscratch/$USER/conda/env/newenv
        (/beegfs_agamede/gscratch/qjornet/conda/env/newenv) [user@na06:~]$ 
    ```
    Once activated you will have access to the environment path, and you can install the libraries or execute the already installed commands 

    ```bash
        (/beegfs_agamede/gscratch/$USER/conda/env/newenv) [user@na06:~]$ conda install numpy scipy 
        ...
        (/beegfs_agamede/gscratch/$USER$/conda/env/newenv) [user@na06:~]$ python -c "import numpy as np; print(np.__version__)"                                                                   
        2.4.1  
    ```





=== "***python venv***" 
    [ Work in progress ] 
    In order to use the commands needed to install the python libraries stored in the conda-forge repository, one have to load the Miniforge3 module. 

    ``` bash
        [user@na06:~]$ module load Python
    ```
    Once loaded you can create and activate your environment by doing: 

    ``` bash
    [user@na06:~]$ python -m venv /beegfs_agamede/gscratch/$USER/python/env/newenv    
    [user@na06:~]$ source /beegfs_agamede/gscratch/$USER/python/env/newenv/bin/activate
    (newenv) [user@na06:~]$ 

    ```

    Once activated you will have access to the environment path, and you can install the libraries with **```python -m pip install```** command or execute the already installed commands 

    ```bash
        (newenv) [qjornet@na06:~]$ python -m pip install numpy scipy
        Collecting numpy
        Obtaining dependency information for numpy from https://files.pythonhosted.org/packages/1b/46/6fa4ea94f1ddf969b2ee941290cca6f1bfac92b53c76ae5f44afe17ceb69/numpy-2.4.2-cp311-cp311-manylinux_2_27_x86_64.manylinux_2_28_x86_64.whl.metadata
        ...
        Installing collected packages: numpy, scipy
        Successfully installed numpy-2.4.2 scipy-1.17.0

        (newenv) [qjornet@na06:~]$ python -c "import numpy as np; print(np.__version__)"
        2.4.2
    ```

    <!-- !!! Important "Libraries" 
        if  -->


After finishing the installation of your environment, you have to quit the interactive session just closing the SHELL session as usal. 

!!! example "Exit interactive session"

    (/beegfs_agamede/gscratch/user/conda/env/newenv) [user@na06:~]$ exit
    salloc: Relinquishing job allocation 425364                                                                                                                                                   
    salloc: Job allocation 425364 has been revoked.
    [user@agamede1:~]$ 

## Step 3 : Using Environments on production jobs

In order to be able to use a user specific environment for production jobs, you need to load the corresponding module and environment in your BATCH script before executing the commands or python scripts. 

Depending on how one has created the environment, we have to modify some lines in the [SLURM script](/jobs/batch_scripts/#example-slurm-script-slurmsl){target=blank} 

=== "conda-forge" 
    ```bash  
    #!/bin/bash 
    #SBATCH --ntasks=1
    #SBATCH --cpus-per-task=4
    #SBATCH --mem-per-cpu=3760M
    #SBATCH --time=4:00:00
    #SBATCH --partition=vfast

    # Required input files for the software execution,
    # separated by a space
    pyscript="myscript.py"
    files="$pyscript input.inp"
    

    # Unload all possible present modules
    module purge
    # LOAD NOW REQUIRED MODULES
    module load Minforge3
    conda activate /beegfs_agamede/gscratch/qjornet/conda/env/newenv

    # Define the command line you will run
    command="python $pyscript > $SLURM_JOB_ID.out 2> $SLURM_JOB_ID.err"  
    ...
    ```

=== "python venv" 
    ```bash  
    #!/bin/bash 
    #SBATCH --ntasks=1
    #SBATCH --cpus-per-task=4
    #SBATCH --mem-per-cpu=3760M
    #SBATCH --time=4:00:00
    #SBATCH --partition=vfast

    # Required input files for the software execution,
    # separated by a space
    pyscript="myscript.py"
    files="$pyscript input.inp"
    

    # Unload all possible present modules
    module purge
    # LOAD NOW REQUIRED MODULES
    module load Python
    source /beegfs_agamede/gscratch/qjornet/python/env/newenv/bin/activate

    # Define the command line you will run
    command="python $pyscript > $SLURM_JOB_ID.out 2> $SLURM_JOB_ID.err"  
    ...
    ```