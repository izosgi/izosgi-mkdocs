# Software manager: Modules (LMOD)

!!! info "Modules" 

    This page will give you some insigths on how to use the LMOD software manager.

The ARINA HPC system uses the **LMOD (Lua-based Modules)** system to manage user environments. This allows users to dynamically load or unload software packages in a clean and modular way.

Using LMOD, users can:

- Switch between software versions easily.
- Load only the software they need.
- Avoid conflicts between packages and dependencies.
- Set up reproducible environments for jobs.

---

## What is a Module?

A *module* is a small script that sets environment variables (like `PATH`, `LD_LIBRARY_PATH`, etc.) so that software can be used on the command line.

Modules are loaded or unloaded dynamically using commands like `module load`, `module unload`, or `ml` (a shorthand for module).

---

## Common Module Commands

Below are the most commonly used commands in the LMOD system.

### List Available Modules

You can list all modules currently available in the system using the following command:

```bash
[user@agamede:~]$ module avail

```
or using the shorthand:
```bash
[user@agamede:~]$ ml av

```



You can filter by name:

```bash
[user@agamede:~]$ ml av GROMACS

----------------------------------------------------------------------------------- /eb/x86_64/modules/bio -----------------------------------------------------------------------------------
   GROMACS/2023.3-aocc-4.1.0-openmpi-4.1.6-spack    GROMACS/2024.1-foss-2023b-CUDA-12.4.0    GROMACS/2024.1-foss-2023b (D)

  Where:
   D:  Default Module

If the avail list is too long consider trying:

"module --default avail" or "ml -d av" to just list the default modules.
"module overview" or "ml ov" to display the number of modules for each name.

Use "module spider" to find all possible modules and extensions.
Use "module keyword key1 key2 ..." to search for all possible modules matching any of the "keys".


```

### Show information about a Module

```bash
[user@agamede:~]$ module show GROMACS/2024.1-foss-2023b
------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
   /eb/x86_64/modules/bio/GROMACS/2024.1-foss-2023b.lua:
------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
help([[
Description
===========
GROMACS is a versatile package to perform molecular dynamics, i.e. simulate the
Newtonian equations of motion for systems with hundreds to millions of
particles.

This is a CPU only build, containing both MPI and threadMPI binaries
for both single and double precision.

It also contains the gmxapi extension for the single precision MPI build.

```

### Search for Modules 

The list of the installed software in the cluster is exhaustive. If you want to find if a specific software is installed, you can use  `module spider *software*` command. For example: 


```bash

[user@agamede:~]$ module spider Python

------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  Python:
------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
    Description:
      Python is a programming language that lets you work more quickly and integrate your systems more effectively.

     Versions:
        Python/3.11.3-GCCcore-12.3.0
        Python/3.11.5-GCCcore-13.2.0
        Python/3.11.6-aocc-4.1.0-spack
     Other possible modules matches:
        GitPython  Python-bundle-PyPI  flatbuffers-python  meson-python  protobuf-python  python  python-isal  spglib-python  wxPython

------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
```
Finds all versions of `Python` available, even those hidden in the module hierarchy.

!!! danger "Usage limitation" 
    The *login nodes* are not intended for running any type of calculations.
    For that reason, it is **ONLY** allowed to search and show details of the available software. 
    In order to used, either you must load the modules in a [batch script]("Hardware/nodes.md"){target=blank} or start an [interactive](){target=_blank} session in a compute node. 

### Load a Module 

The following command enable you to load the specified software module into your environment.
For example, if you are interested in SciPy python bundle :

```bash
module load SciPy-bundle
```
or 
```bash
ml  SciPy-bundle
```

This command will modify the necessary environment variables (PATH, LD_LIBRARY_PATH, etc) to be able to locate the executable and library to run the software. 

### List Loaded Modules

In order to list all loaded modules, either directely loaded or dependencies, one can use `module list` command or the abbreviated command `ml' . 

```bash
$ module load SciPy-bundle
$ module list   # or ml

Currently Loaded Modules:
  1) GCCcore/13.2.0                 6) FlexiBLAS/3.3.1-GCC-13.2.0  11) libreadline/8.2-GCCcore-13.2.0  16) OpenSSL/1.1                         21) Python-bundle-PyPI/2023.10-GCCcore-13.2.0
  2) zlib/1.2.13-GCCcore-13.2.0     7) FFTW/3.3.10-GCC-13.2.0      12) Tcl/8.6.13-GCCcore-13.2.0       17) Python/3.11.5-GCCcore-13.2.0        22) pybind11/2.11.1-GCCcore-13.2.0
  3) binutils/2.40-GCCcore-13.2.0   8) gfbf/2023b                  13) SQLite/3.43.1-GCCcore-13.2.0    18) cffi/1.15.1-GCCcore-13.2.0          23) SciPy-bundle/2023.11-gfbf-2023b
  4) GCC/13.2.0                     9) bzip2/1.0.8-GCCcore-13.2.0  14) XZ/5.4.4-GCCcore-13.2.0         19) cryptography/41.0.5-GCCcore-13.2.0
  5) OpenBLAS/0.3.24-GCC-13.2.0    10) ncurses/6.4-GCCcore-13.2.0  15) libffi/3.4.4-GCCcore-13.2.0     20) virtualenv/20.24.6-GCCcore-13.2.0
```

### Unload All Modules 
In order to unload any module, it is recommended to purge all previsously loaded modules with the command `module purge`.

```bash
$ module purge
```
This command will reset all the environment variables modified by `module load` command. 

## Understanding Module Hierarchy

The modules are strcutured as follows :   `SOFTWARE/version-compiler_toolchain-version-extra`

For example for : `SciPy-bundle/2023.11-gfbf-2023b` 

- Name of the software:   SciPy-bundle

- Version:                2023.11

- [Compiler tool chain](){target=_blank}:    gfbf     

- Tool chain version: 2023b


If no version of the software is specified, the module manager will load the latest installed version. 

```bash
[user@agamede:~]$ ml av ORCA     

---------------------------------------- /eb/x86_64/modules/chem ------------------------------------------
   ORCA/5.0.4-gompi-2023a    ORCA/5.0.4-gompi-2023b    ORCA/6.0.0-gompi-2023b    ORCA/6.0.1-gompi-2023b (D)

  Where:
   D:  Default Module

```

In that case if no version of `ORCA` software is not specified, the `module load ORCA` will load the 6.0.1 version specify by `(D)`.



## Best Practice 

In the following we stress some important remarks to be token into account for a proper usage of the module software manager: 

-   Use **`ml purge`** before starting a new setup to avoid environment conflicts.

-   Always specify the full version of a module (e.g., `ml GCC/13.2.0`) for reproducibility.

-   Use **`module spider`** if a module is not visible — it may be hidden due to the hierarchy.

-   Include **`module load`** commands in job scripts for consistency and portability.
