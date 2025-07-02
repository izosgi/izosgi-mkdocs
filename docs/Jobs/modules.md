# Software manager: Modules (LMOD)

!!! info " Information" 

    This page is under construction.


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

!!! danger "Usage limitation" 
    The *login nodes* are not intended for running any type of calculations.
    For that reason, it is **ONLY** allowed to search and show details of the available software. 
    In order to used, either you must load the modules in a [batch script]("Hardware/nodes.md"){target=blank} or start an [interactive](){target=_blank} session. 

### Load a Module 

The following command enable you to load the specified software module into your environment.
