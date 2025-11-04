# BATCH Scripts in ARINA

Our aim is to help researchers:

We prepared several BATCH scripts available in:

**`/home/users/slurm/batch-scripts/`**

| *SOFTWARE*        |               |              |           |
|-----------------|---------------|--------------|-----------|
| *ABINIT*       | *BLAST*       | *generic*    | *Lumerical* |
| *nf_core_eager* | *qespresso*   | *scilab*     | *starccm+*  |
| *ams*           | *CP2K*        | *gromacs*    | *matlab*    |
| *nwchem*        | *qiime2*      | *shasta*     | *Trinity*   |
| *ANSYS*         | *lammps*      | *molcas*     |
| *orca*          | *R*           | *siesta*     | *vasp*      |

---

## Example SLURM Script (`slurm.sl`)

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

---

### Notes

- The scripts are designed for ARINA's SLURM-managed clusters.
- `slurm_func.sh` contains helper functions for scratch space and file recovery.
- `chooseScr` accepts the `-g` option to enforce to use the `/gscratch/$USER` directory.
- Always edit `command` and `files` variables according to the specific software you are running.
- Modules should be loaded as needed before execution.
