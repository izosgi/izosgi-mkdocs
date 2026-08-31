# Usefull SLURM Commands

!!! info " Information" 

    This page is under construction.

In this site, the USER can find some usefull SLURM commands to manage their jobs and accounting.
Furhter information can be found at the SLURM documentation website: [SLURM ](https://slurm.schedmd.com/man_index.html){target=blank}.

Or find the [SLURM cheat sheet](https://slurm.schedmd.com/pdfs/summary.pdf){target=blank} summary. 

??? warning "ARINA commands" 
    Although the SLURM documentation is well written, it can be difficult for the USER to find the proper combination of options for its purpose. 
    For that reason, we encourage the USER to check [ARINA commands](/jobs/commands/) section. 
    In that section, some usefull commands are explained which wrapper most common SLURM commands into a suitable output format.

## MANAGEMENT
??? tip "squeue"
    [**squeue**](https://slurm.schedmd.com/squeue.html){target=blank} is used to view job and job step information for jobs managed by Slurm.
    Due to privacy policy in ARINA, the user is only allowed to check for their own jobs. 
    !!! example ""
        USAGE: **squeue** *[OPTIONS...]*
    !!! info ""
        ```bash 
        [user@agamede ~]$ squeue
        JOBID PARTITION     NAME     USER ST       TIME  NODES NODELIST(REASON)
        537111  p_medium JOB_NAME user  R 3-23:46:04      1 na04
        ```

??? tip "scancel"
    [**scancel**](https://slurm.schedmd.com/scancel.html){target=blank} is used to cancel or abort jobs or job steps that are under the control of Slurm. 
    !!! example ""
        USAGE: **scancel** *[OPTIONS...]* *JOBID* 
    !!! info ""
        ``` [user@agamede ~]$ scancel 537111 ```
    !!! warning ""
        ``` [user@agamede ~]$ scancel --me ```    : Cancels all jobs owned by the current user. 


??? tip "scontrol"
    [**scontrol**](https://slurm.schedmd.com/scontrol.html){target=blank} is used view or modify Slurm configuration and state. 
    For safety reasons, the Users are only allowed to interact with their own jobs. 

    !!! example ""
        USAGE: **scontrol** *[OPTIONS...]* *[COMMAND]* 

    !!! info ""
        ```bash
        [user@agamede ~]$ scontrol show jobid 537111 
        JobId=537111 JobName=JOB_NAME
            UserId=user(5555) GroupId=group(555) MCS_label=N/A
            Priority=15587 Nice=0 Account=pojuu QOS=normal
            JobState=TIMEOUT Reason=TimeLimit Dependency=(null)
            Requeue=0 Restarts=0 BatchFlag=1 Reboot=0 ExitCode=0:15
            DerivedExitCode=0:0
            RunTime=4-00:00:11 TimeLimit=4-00:00:00 TimeMin=N/A
            SubmitTime=2026-08-27T10:41:08 EligibleTime=2026-08-27T10:41:08
            AccrueTime=2026-08-27T10:41:08
            StartTime=2026-08-27T10:41:53 EndTime=2026-08-31T10:42:04 Deadline=N/A
            SuspendTime=None SecsPreSuspend=0 LastSchedEval=2026-08-27T10:41:53 Scheduler=Backfill
            Partition=p_medium AllocNode:Sid=na22:290604
            ReqNodeList=(null) ExcNodeList=(null)
            NodeList=na04
            BatchHost=na04
            NumNodes=1 NumCPUs=8 NumTasks=8 CPUs/Task=1 ReqB:S:C:T=0:0:*:1
            ReqTRES=cpu=8,mem=11280M,node=1,billing=10
            AllocTRES=cpu=8,mem=11280M,node=1,billing=10
            Socks/Node=* NtasksPerN:B:S:C=0:0:*:* CoreSpec=*
            JOB_GRES=(null)
                Nodes=na04 CPU_IDs=136-137,172-177 Mem=11280 GRES=
            MinCPUsNode=1 MinMemoryNode=11280M MinTmpDiskNode=0
            Features=[amd192|xeon40] DelayBoot=00:00:00
            OverSubscribe=OK Contiguous=0 Licenses=(null) Network=(null)
            Command=/PATH_TO_THE_BATCH_SCRIPT/slurm.sl
            WorkDir=/PATH_TO_THE_SUBMIT_DIRECTORY/
            StdErr=/PATH_TO_THE_SUBMIT_DIRECTORY/slurm-537111.out
            StdIn=/dev/null
            StdOut=/PATH_TO_THE_SUBMIT_DIRECTORY/slurm-537111.out
            Power=
        ```  
    !!! warning ""
        ``` [user@agamede ~]$ scontrol hold JOBID ``` : Prevent a pending job from being started. 

        ``` [user@agamede ~]$ scontrol release JOBID ```    : Release a previously held job to begin execution.

??? tip "sinfo" 
    [**sinfo**](https://slurm.schedmd.com/sinfo.html){target=blank} is used to view  information about Slurm nodes and partitions.  
    !!! example ""
        USAGE: **sinfo** *[OPTIONS...]*  
    !!! info ""
        ```bash
        [user@agamede ~]$ sinfo -s 
        PARTITION AVAIL  TIMELIMIT   NODES(A/I/O/T) NODELIST
        vfast        up    4:00:00       25/43/1/69 na[01-22],nagpu[01-02],nh[001-045]
        p_fast       up 2-00:00:00       25/43/1/69 na[01-22],nagpu[01-02],nh[001-045]
        p_medium     up 5-00:00:00       25/43/1/69 na[01-22],nagpu[01-02],nh[001-045]
        p_slow       up 12-00:00:0       24/43/0/67 na[01-22],nh[001-045]
        p_sslow      up 208-00:00:       24/43/0/67 na[01-22],nh[001-045]
        ```
    !!! warning ""
        ```bash
        [user@agamede ~]$ sinfo -Nel -n nagpu01
        Mon Aug 31 11:31:23 2026
        NODELIST   NODES PARTITION       STATE CPUS    S:C:T MEMORY TMP_DISK WEIGHT AVAIL_FE REASON              
        nagpu01        1     vfast       mixed 192    2:96:1 154705        0    100   amd192 none                
        nagpu01        1    p_fast       mixed 192    2:96:1 154705        0    100   amd192 none                
        nagpu01        1  p_medium       mixed 192    2:96:1 154705        0    100   amd192 none  
        ```   


## SUBMITION
??? tip "sbatch"
    [**sbatch**](https://slurm.schedmd.com/sbatch.html){target=blank} is used to submit a batch script to SLURM.  
    !!! example ""
        USAGE: **sbatch** *[OPTIONS(0)...] [:[OPTIONS(N)...]] script(0) [args(0)...] *
    !!! info ""
        ```bash
        [user@agamede ~]$ cat slurm.sl
        #!/bin/sh
        #SBATCH --time=1
        srun hostname |sort

        [user@agamede ~]$ sbatch -N 4 slurm.sl
        salloc: Granted job allocation 65537
        ```
    !!! warning ""
        <!-- ```bash -->
        <!-- ```    -->
        Most of the options that accepts the **sbatch** command, can also be specified inside the BATCH scripts preceeded by ```#SBATCH ```. 



??? tip "srun "
    
    [**srun**](https://slurm.schedmd.com/srun.html){target=blank} is used obtain a parallel job allocation (as needed) and execute an application.  
    !!! example ""
        USAGE: **srun** *[OPTIONS(0)... [ executable(0) [args(0)...]]] [:[OPTIONS(N)...[ executable(0) [args(0)...]]]*
    !!! info ""
        ```bash
        [user@agamede ~]$ cat slurm.sl
        #!/bin/sh
        #SBATCH --time=1
        srun hostname |sort

        [user@agamede ~]$ sbatch -N 4 slurm.sl
        salloc: Granted job allocation 65537
        ```
    !!! warning ""
        <!-- ```bash -->
        <!-- ```    -->
        Most of the options that accepts the **sbatch** command, can also be specified inside the BATCH scripts preceeded by ```#SBATCH ```. 

??? tip "salloc"
    Obtain a job allocation

## ACCOUNTING

??? tip "sacct"
    Display accounting data.

??? tip "sreport"
    Report job usage and cluster utilization.


??? tip "seff"


??? tip "sprio"


