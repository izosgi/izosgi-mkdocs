# SLURM: job manager 

!!! info "SLURM" 
    This guide provides instructions on how to submit batch jobs using the SLURM scheduler on IZO-SGI's computing systems.

## SLURM Overview

SLURM (Simple Linux Utility for Resource Management) is an open-source, fault-tolerant, and highly scalable system for managing clusters and scheduling batch jobs on both small and large Linux clusters.

## Batch Jobs

Batch jobs are usually submitted via a **batch script** — a plain text file containing a set of job directives along with GNU/Linux commands or utilities. These scripts are submitted to SLURM, where they are placed in a queue and executed when the requested resources become available.

## SLURM Directives

SLURM provides a wide range of directives to specify resource requirements and other job attributes. These directives can be included in:

- **Batch script headers** (lines beginning with `#SBATCH`)

- **Command-line options** when using the `sbatch` command

Directives allow you to control various aspects of job execution, such as CPU and memory allocation, job name, output files, and execution time.

In the following we describe the minimal BATCH options and some usefull and common variables: 

## BATCH examples

!!! example "Minimal Examples"
    In this section we show only minimal example to run in different parallelization protocols. 

    For more specific batch scripts, please take a look on [Batch scitps](batch_scripts.md) section.


=== "Serial"
    ```bash
    #!/bin/bash
    #SBATCH --nodes=1
    #SBATCH --ntasks=1

    module load MYPROGRAM
    myprogram
    ```

=== "Pure MPI / Distributed memory"
    ```bash
    #!/bin/bash
    #SBATCH --nodes=2
    #SBATCH --ntasks-per-node=4
    
    module load MYPROGRAM
    srun myprogram

    ```

=== "Pure OpenMPI / Thread Paralleization"
    ```bash
    #!/bin/bash
    #SBATCH --nodes=1
    #SBATCH --ntasks-per-node=1
    #SBATCH --cpus-per-task=8

    export OMP_NUM_THREADS=$SLURM_CPUS_PER_TASK
    
    module load MYPROGRAM
    srun myprogram

    ```
=== "Hybrid MPI-OpenMPI "
    ```bash
    #!/bin/bash
    #SBATCH --nodes=2
    #SBATCH --ntasks-per-node=1
    #SBATCH --cpus-per-task=4

    export OMP_NUM_THREADS=$SLURM_CPUS_PER_TASK
    
    module load MYPROGRAM
    srun myprogram

    ```