# BATCH Scripts in ARINA

## Example SLURM Script (`slurm.sl`)

The following example shows a general BATCH script that can be modified or adapted to most of the common calculations ran in ARINA:
??? tip "script *slurm.sl*"
    ```bash
    #!/bin/bash 
    #SBATCH --ntasks=4
    #SBATCH --mem-per-cpu=3760M
    #SBATCH --time=4:00:00
    #SBATCH --partition=vfast

    # Required input files for the software execution,
    # separated by a space
    files="input.inp checkpoint.chk"

    # Unload all possible present modules
    module purge
    # LOAD NOW REQUIRED MODULES
    module load MYDESIREDMODULE/version-compiler

    # Define the command line you will run
    command=""

    #######################################################
    ## Do not change below this line

    . /home/users/slurm/etc/slurm_func.sh

    # Signal trap to recover files
    trap 'cleanup_function' EXIT

    HOST=$(hostname)
    echo "Job running on $HOST"

    chooseScr

    LDIR=$(pwd)
    export LDIR

    echo "cp ${files} $0 to $scr/."
    cp ${files} $0 ${scr}/.

    cd $scr

    # CALL EXECUTABLE with SRUN
    echo /usr/bin/time -p srun ${command}
    eval /usr/bin/time -p srun ${command}

    ```

Once the script is generated or modified, the `sbatch` command has to be executed in order to send the job to the cluster queues.

!!! Example "Submitting a job"
    ```bash
    [user@agamede] sbatch slurm.sl
    ```

---

## *send* commands

In the Scientific Computing Center of SGIker (EHU) we have prepared some commands that enable the user to submit jobs in the queue system by only requesting an input file. 
Those commands starts by the string "send_" following a specification of the software to be ran: 
!!! info ""
    | **Software** | *command* | **Software** | *command* |
    | ---------- | --------- | ---------- | --------- |
    | **ADF**  :    | send_adf |   **Amber**:    | send_amber | 
    | **Blender**:  | send_blender | **CP2K**: | send_cp2k
    | **Gaussian**: |  send_gauss16 | **GROMACS**: | send_gmx |
    | **LAMMPS**: | send_lmp   | **MModel** : | send_mmodel | 
    | **MOLCAS**: | send_molcas | **NCIPLOT**: | send_nciplot | 
    | **NWChem**: | send_nwchem | **ORCA**: | send_orca| 
    | **PSI4**: | send_psi4 | **VASP**: | send_vasp |




Further explanation on the usage of the ***send_sw*** commands can be found at [***send commands***](/jobs/commands/#send_commands) .

## Software Prepared Scripts
Our aim is to help researchers:

We prepared several BATCH scripts available in:

**`/home/users/slurm/batch-scripts/`**

??? tip "SOFTWARE LIST"
    |      |               |              |           |
    |-----------------|---------------|--------------|-----------|
    | *ABINIT*       | *BLAST*       | *generic*    | *Lumerical* |
    | *nf_core_eager* | *qespresso*   | *scilab*     | *starccm+*  |
    | *ams*           | *CP2K*        | *gromacs*    | *matlab*    |
    | *nwchem*        | *qiime2*      | *shasta*     | *Trinity*   |
    | *ANSYS*         | *lammps*      | *molcas*     |
    | *orca*          | *R*           | *siesta*     | *vasp*      |
    |      |               |              |           |
---


### Notes

- The scripts are designed for ARINA's SLURM-managed clusters.
- `slurm_func.sh` contains helper functions for scratch space and file recovery.
- `chooseScr` accepts the `-g` option to enforce to use the `/gscratch/$USER` directory.
- Always edit `command` and `files` variables according to the specific software you are running.
- Modules should be loaded as needed before execution.
