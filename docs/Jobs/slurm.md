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

