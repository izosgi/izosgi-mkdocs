# Compute Nodes and Specialized Nodes

In this section, you will find detailed information about the compute nodes and specialized nodes available in each of our HPC clusters. This includes the total number of nodes, processor types, memory configurations, and any specialized hardware such as GPU and high-memory nodes.

## Cluster 1: **ARINA**

### **Login nodes**

The cluster can be accessed connecting via ssh to the following login nodes : 

1. agamede.lgp.ehu.es
2. kalk2020.lgp.ehu.es

### **Compute Nodes**
The ARINA cluster, created in 2020 and upgraded in 2024, is composed by two set of compute node, named **amd192** and **xeon40**

***amd192***

- Total Number of Nodes: 18 ( named : naXX )
- Processor Type: 2 x [AMD EPYC 9654 Processor with 96 cores](https://www.amd.com/en/products/processors/server/epyc/4th-generation-9004-and-8004-series/amd-epyc-9654.html)
- Number of Cores per Node: 192 
- Total Number of Cores: 3456
- Memory per Node: 4Gb / core = 768 Gb
- Total Memory: 13,5 Tb

***xeon40***

- Total Number of Nodes: 44 (named nhXXX )
- Processor Type:  2 x [Intel(R) Xeon(R) Gold 6230 CPU @ 2.10GHz with 20 cores](https://www.intel.la/content/www/xl/es/products/sku/192437/intel-xeon-gold-6230-processor-27-5m-cache-2-10-ghz/specifications.html)
- Number of Cores per Node: 40 
- Total Number of Cores: 1760
- Memory per Node: 4,75Gb / core = 190 Gb
- Total Memory: 8,1 Tb


### **Specialized Nodes**

***GPU Nodes***:

  - Number of GPU Nodes: 1  ( named nagpu01 )
  - Processor type : 2 x [AMD EPYC 9654 Processor with 96 cores](https://www.amd.com/en/products/processors/server/epyc/4th-generation-9004-and-8004-series/amd-epyc-9654.html)
  - GPU Model: [NVIDIA A100 80Gb](https://www.nvidia.com/en-us/data-center/a100/) with [NVlink pair connection](https://www.nvidia.com/en-us/design-visualization/nvlink-bridges/). 
  - Number of GPUs per Node: 8
  - MIG Partitioning: 4 x A100, 4 x 4g.40gb, 4 x 2g.20gb, 4 x 1g.20gb 
  - Memory per node: 1.5Tb 

***High-Memory Nodes (FAT-node)***: 

  - Number of High-Memory Nodes: 1 ( name nh045, however GPU node can be used also as a FAT-node)
  - Processor Type:  2 x [Intel(R) Xeon(R) Gold 6230 CPU @ 2.10GHz with 20 cores](https://www.intel.la/content/www/xl/es/products/sku/192437/intel-xeon-gold-6230-processor-27-5m-cache-2-10-ghz/specifications.html)
  - Memory per High-Memory Node: 1,5Tb.

## Cluster 2: **ARINA-ZAHAR**
The ARINA-ZAHAR cluster, created in 2015 and upgraded in 2017, is composed by two set of compute node, named **xeon28** and **xeon20**

### **Login nodes**

The cluster can be accessed connecting via ssh to the following login nodes : 

1. kalk2017.lgp.ehu.es
2. katramila.lgp.ehu.es

### Compute Nodes
- **Total Number of Nodes**: 
- **Processor Type**: 
- **Number of Cores per Node**: 
- **Total Number of Cores**: 
- **Memory per Node**: 
- **Total Memory**: 

### Specialized Nodes
- **GPU Nodes**: 
  - **Number of GPU Nodes**: 
  - **GPU Model**: 
  - **Number of GPUs per Node**: 
- **High-Memory Nodes**: 
  - **Number of High-Memory Nodes**: 
  - **Memory per High-Memory Node**: 