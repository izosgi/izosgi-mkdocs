# Usefull Commands in ARINA

!!! info " Information" 

    This page is under construction.

In order to enhance the User experience, we have prepare a banch of scripts and commands that enable the User to easily extract information of their jobs, accounting, etc ...

## Cluster Status

### *clusterload*
This command enables the user to check the current status of the cluster: occupied, idle or down CPU, GPU.
The *clusterload* command can accept a couple of options. 

??? tip "clusterload "
    === "*$ clusterload --help*"
        ```bash 
        [user@agamede:~]$ clusterload --help

        /home/users/slurm/bin/clusterload: illegal option -- -
        Usage: clusterload  [-n]

        Optional arguments:
            -v: verbose mode. Print info about xeon40 and amd192
            -g: Print info about GPU usage.
                If -gv will show usage for specific MIG partitions
        DEFAULT : clusterload 

        Written by: Joaquim Jornet < joaquim.jornet@ehu.es>

        ```

    === "*$ clusterload*"
        This command shows a summary of usage of only CPU.

        ```bash
        [user@agamede: ~]$ clusterload 

        Cluster:  ARINA 
        DOWN: 0, DRAIN: 0, FULL: 28, MIX: 41, IDLE: 0
        agamede/kalk2020 (amd192, xeon40) 
        CPU Occupation:  79.53 % Total:   6408  Used:   5096  Free:   1312  Down:      0  Pending jobs:    508

        Cluster:  ARINA-ZAHAR 
        DOWN: 0, DRAIN: 0, FULL: 56, MIX: 17, IDLE: 4
        kalk2017/katramila (xeon28,xeon20) 
        CPU Occupation:  67.80 % Total:   2596  Used:   1760  Free:    288  Down:    548  Pending jobs:      0


        --------------------------------------------------------------------------------------------------
        TOTAL:
        Occupation:  76.14 % Total:   9004  Used:   6856  Free:   1600  Down:    548  Pending jobs:    508
        --------------------------------------------------------------------------------------------------

        ```

    === "*$ clusterload* -gv"
        This command shows an extended information on the usage of CPU by family type and GPUs.

        ```bash
        [user@agamede: ~]$ clusterload -gv

        Cluster:  ARINA 
        DOWN: 0, DRAIN: 0, FULL: 28, MIX: 41, IDLE: 0
        agamede (amd192) 
        Occupation:  79.71 % Total:   4608  Used:   3673  Free:    935  Down:      0 
        kalk2020 (xeon40) 
        Occupation:  78.17 % Total:   1800  Used:   1407  Free:    393  Down:      0 
        GPUs 
                a100:   0.00 % Total:      8  Used:      0  Free:      8  
                h100:   0.00 % Total:      4  Used:      0  Free:      4  
        agamede/kalk2020 (amd192, xeon40) 
        CPU Occupation:  79.28 % Total:   6408  Used:   5080  Free:   1328  Down:      0  Pending jobs:    508
        GPU Occupation:   0.00 % Total:     12  Used:      0  Free:     12 

        Cluster:  ARINA-ZAHAR 
        DOWN: 0, DRAIN: 0, FULL: 56, MIX: 17, IDLE: 4
        kalk2017 (xeon28) 
        Occupation:  78.15 % Total:   1904  Used:   1488  Free:    248  Down:    168 
        katramila (xeon20) 
        Occupation:  39.31 % Total:    692  Used:    272  Free:     40  Down:    380 
        kalk2017/katramila (xeon28,xeon20) 
        CPU Occupation:  67.80 % Total:   2596  Used:   1760  Free:    288  Down:    548  Pending jobs:      0


        --------------------------------------------------------------------------------------------------
        TOTAL:
        Occupation:  75.97 % Total:   9004  Used:   6840  Free:   1616  Down:    548  Pending jobs:    508
        --------------------------------------------------------------------------------------------------

        ```

### *slibre*
This command shows the current availability of each node showung the free CPU and Memory.
??? tip "slibre"
    ```bash 
        [user@agamede: ~]$ slibre
        PARTITION AVAIL  TIMELIMIT  NODES  STATE NODELIST
        vfast        up    4:00:00     41    mix na[01-18,20-22],nagpu02,nh[011-017,021,024-028,031-034,044-045]
        vfast        up    4:00:00     28  alloc na19,nagpu01,nh[001-010,018-020,022-023,029-030,035-043]
        na01 na02 na03 na04 na05 na06 na07 na08 na09 na10 na11 na12 na13 na14 na15 na16 na17 na18 na20 na21 na22 nagpu02 nh011 nh012 nh013 nh014 nh015 nh016 nh017 nh021 nh024 nh025 nh026 nh027 nh028 nh031 nh032 nh033 nh034 nh044 nh045
        ========================= Free           /            Reserved =================

        na01     FREE=  28   AvMEM(Mb) =    5765 (    205 /cpu)     [ UseMEM(Mb) =  434108  FreeMem(Mb) =  338745]
        na02     FREE=  42   AvMEM(Mb) =    7813 (    186 /cpu)     [ UseMEM(Mb) =  448970  FreeMem(Mb) =  323883]
        na03     FREE=  70   AvMEM(Mb) =   44737 (    639 /cpu)     [ UseMEM(Mb) =  385211  FreeMem(Mb) =  387642]
        na04     FREE=  54   AvMEM(Mb) =   27653 (    512 /cpu)     [ UseMEM(Mb) =  426458  FreeMem(Mb) =  346395]
        na05     FREE=  66   AvMEM(Mb) =   30517 (    462 /cpu)     [ UseMEM(Mb) =  508563  FreeMem(Mb) =  264290]
        na06     FREE=  50   AvMEM(Mb) =   17413 (    348 /cpu)     [ UseMEM(Mb) =  290821  FreeMem(Mb) =  482032]
        na07     FREE=  62   AvMEM(Mb) =     453 (      7 /cpu)     [ UseMEM(Mb) =  487643  FreeMem(Mb) =  285210]
        na08     FREE=   4   AvMEM(Mb) =    9061 (   2265 /cpu)     [ UseMEM(Mb) =  423144  FreeMem(Mb) =  349709]
        na09     FREE=  24   AvMEM(Mb) =     373 (     15 /cpu)     [ UseMEM(Mb) =  393844  FreeMem(Mb) =  379009]
        na10     FREE=  50   AvMEM(Mb) =   13813 (    276 /cpu)     [ UseMEM(Mb) =  403940  FreeMem(Mb) =  368913]
        na11     FREE=  14   AvMEM(Mb) =   29237 (   2088 /cpu)     [ UseMEM(Mb) =  433225  FreeMem(Mb) =  339628]
        na12     FREE=  24   AvMEM(Mb) =   37749 (   1572 /cpu)     [ UseMEM(Mb) =  724902  FreeMem(Mb) =   47951]
        na13     FREE=  20   AvMEM(Mb) =   22773 (   1138 /cpu)     [ UseMEM(Mb) =  349065  FreeMem(Mb) =  423788]
        na14     FREE=  74   AvMEM(Mb) =   59717 (    806 /cpu)     [ UseMEM(Mb) =  466760  FreeMem(Mb) =  306093]
        na15     FREE=  52   AvMEM(Mb) =   30837 (    593 /cpu)     [ UseMEM(Mb) =  563327  FreeMem(Mb) =  209526]
        na16     FREE=  40   AvMEM(Mb) =   49973 (   1249 /cpu)     [ UseMEM(Mb) =  153564  FreeMem(Mb) =  619289]
        na17     FREE=  74   AvMEM(Mb) =   66693 (    901 /cpu)     [ UseMEM(Mb) =  337463  FreeMem(Mb) =  435390]
        na18     FREE=  32   AvMEM(Mb) =   22805 (    712 /cpu)     [ UseMEM(Mb) =  328471  FreeMem(Mb) =  444382]
        na20     FREE=  81   AvMEM(Mb) =   59969 (    740 /cpu)     [ UseMEM(Mb) =  464939  FreeMem(Mb) =  307914]
        na21     FREE=  36   AvMEM(Mb) =   33605 (    933 /cpu)     [ UseMEM(Mb) =  378707  FreeMem(Mb) =  394146]
        na22     FREE=  34   AvMEM(Mb) =   37625 (   1106 /cpu)     [ UseMEM(Mb) =  410548  FreeMem(Mb) =  362305]
        nagpu02     FREE=   4   AvMEM(Mb) =  463259 ( 115814 /cpu)     [ UseMEM(Mb) =  292104  FreeMem(Mb) = 1255187]
        nh011     FREE=  28   AvMEM(Mb) =   90174 (   3220 /cpu)     [ UseMEM(Mb) =   32181  FreeMem(Mb) =  160393]
        nh012     FREE=  16   AvMEM(Mb) =   67614 (   4225 /cpu)     [ UseMEM(Mb) =   84518  FreeMem(Mb) =  108056]
        nh013     FREE=   8   AvMEM(Mb) =   69694 (   8711 /cpu)     [ UseMEM(Mb) =   86247  FreeMem(Mb) =  106327]
        nh014     FREE=  28   AvMEM(Mb) =   90174 (   3220 /cpu)     [ UseMEM(Mb) =   92392  FreeMem(Mb) =  100182]
        nh015     FREE=  28   AvMEM(Mb) =   90174 (   3220 /cpu)     [ UseMEM(Mb) =   66966  FreeMem(Mb) =  125608]
        nh016     FREE=   8   AvMEM(Mb) =   69694 (   8711 /cpu)     [ UseMEM(Mb) =   46565  FreeMem(Mb) =  146009]
        nh017     FREE=  20   AvMEM(Mb) =   57406 (   2870 /cpu)     [ UseMEM(Mb) =   49694  FreeMem(Mb) =  142880]
        nh021     FREE=   8   AvMEM(Mb) =   69694 (   8711 /cpu)     [ UseMEM(Mb) =   51501  FreeMem(Mb) =  141073]
        nh024     FREE=  28   AvMEM(Mb) =   90174 (   3220 /cpu)     [ UseMEM(Mb) =   47372  FreeMem(Mb) =  145202]
        nh025     FREE=  28   AvMEM(Mb) =   90174 (   3220 /cpu)     [ UseMEM(Mb) =   89483  FreeMem(Mb) =  103091]
        nh026     FREE=  28   AvMEM(Mb) =   90174 (   3220 /cpu)     [ UseMEM(Mb) =   51713  FreeMem(Mb) =  140861]
        nh027     FREE=  16   AvMEM(Mb) =   67614 (   4225 /cpu)     [ UseMEM(Mb) =  106950  FreeMem(Mb) =   85624]
        nh028     FREE=  28   AvMEM(Mb) =   90174 (   3220 /cpu)     [ UseMEM(Mb) =   46015  FreeMem(Mb) =  146559]
        nh031     FREE=  28   AvMEM(Mb) =   90174 (   3220 /cpu)     [ UseMEM(Mb) =  104640  FreeMem(Mb) =   87934]
        nh032     FREE=  28   AvMEM(Mb) =   90174 (   3220 /cpu)     [ UseMEM(Mb) =   71771  FreeMem(Mb) =  120803]
        nh033     FREE=  28   AvMEM(Mb) =   90174 (   3220 /cpu)     [ UseMEM(Mb) =  125067  FreeMem(Mb) =   67507]
        nh034     FREE=  28   AvMEM(Mb) =   90174 (   3220 /cpu)     [ UseMEM(Mb) =   94992  FreeMem(Mb) =   97582]
        nh044     FREE=   8   AvMEM(Mb) =   69694 (   8711 /cpu)     [ UseMEM(Mb) =   47947  FreeMem(Mb) =  144627]
        nh045     FREE=   1   AvMEM(Mb) =  377711 ( 377711 /cpu)     [ UseMEM(Mb) =  426768  FreeMem(Mb) = 1120415]
        ---------
        TOTAL FREE    =    1328 
    ```

## Current jobs 

### *ni*

### *mu*

### *remote*

## Finished Job 

### *myjobs*

### *jobinfo*

### *seff*

### *myeff*

## Accounting

### *grpreport*

### *grpdisk* 

### *myreport*


## Sending jobs

### *send* commands

### *view* commands