# Connection
## SSH Protocol

Secure Shell (SSH) is a cryptographic network protocol that facilitates secure remote access to computer systems or servers over insecure networks. It establishes a secure channel for data communication between two devices, protecting transmitted data from unauthorized access, tampering, and eavesdropping.

SSH is extensively used for remote administration, secure file transfers, and other network services. Key benefits of SSH include:

- **Encrypted Communication** : SSH encrypts all data exchanged between the client and server, ensuring confidentiality and integrity.
- **Strong Authentication**: SSH supports various authentication methods, such as passwords, public key authentication, and Kerberos-based authentication.
- **Flexibility**: SSH can be integrated with different network protocols and applications, making it highly adaptable to various use cases.

## SSH in the Context of HPC

In High Performance Computing (HPC) environments, researchers and engineers frequently need to access remote clusters and supercomputers for complex simulations, data processing, and analysis. Using SSH in HPC systems offers several advantages:

- **Security**: HPC systems often handle sensitive research data, making security a top priority. SSH ensures that data and system access remain secure.
- **Scalability**: SSH enables users to manage and interact with multiple nodes in an HPC cluster, simplifying the deployment and control of large-scale computing resources.
- **Remote Access**: Users can access HPC systems from anywhere with an internet connection, enhancing collaboration and productivity.


## Login servers connection

!!! danger " Internal Network "

    Notice that before trying to connect via '''ssh''' to any of the ARINA's login servers, you must be connected into the EHU/UPV network. So, either first you connect from a PC located in the EHU/UPV or you must first connect to the VPN. For the latter, you can find information in the following [link](https://www.ehu.eus/es/web/ikt-tic/vpn){target=_blank}.
    



=== "Linux / Mac" 
    If the workstation employed for logging in Arina deploys either a Unix/linux or a Mac OS operating system, then the sole ssh protocol can be used.
    
    Within the most common releases of these OSs, the ssh protocol is usually already activated. 
    If not, look for instructions on how to activate it on the web.
    
    You an connect easyl following the next steps:

    1.  Open a command line windows (by either clicking on the command line icon or typing command line in the OS browser bar)

    2.  Use ssh command to start secure connectio to the server:

            ssh -X username@agamede.lgp.ehu.es 
    The -X flag allows for the opening of Graphical User Interfaces (GUIs), namely program windows. In some cases, if you are working on a Mac OS workstation, you may need a third-party application to be able to launch GUIs: XQuartz. After its download and installation, make sure to launch it before trying to log in Arina.

=== "Windows" 
    In order to connect from a Windows PC, you will need to download and install a third party software that enable ssh and or ftp connection to a Linux server. 
    For its simplicity we recommend to install [MobaXterm](https://mobaxterm.mobatek.net/){target=_blank}

    Here we show how to set up MobaXterm, which is the recommended one, but a similar configuration process could be followed for the rest of the mentioned software.

    1.  Open the MobaXterm software

    2.  Go to Sessions tab and select **New session** from the drop-down menu.

    3.  Select the first icon (**SSH**) from the line-list on top of the pop-up window, and fill the *Remote Host* gap with the login server name (i.e. **agamede.lgp.ehu.es** )

    4. Tick the *Specify username* box and insert the Arina username of the user in the gap next to it, and press *OK* button.

    5. It will appear a new terminal windows asking for the required password. 
    Once you enter the corret password, the connection will be established and you will be able to use command line options as well as use "*Drag & Drop*" to copy files from your personal PC to the server and vice-versa.

