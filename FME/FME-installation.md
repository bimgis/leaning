
# Fme Installation
## FlexServer
### installation on Unbutun
1. Download fme-flexnet-linux-x64.tar.gz from SAFE.  
2. Create a Directory for the Flexera License Manager  
    mkdir /opt/FlexServer  
    cd /opt/FlexServer  
    gunzip < ~/fme-flexnet-linux-x64.tar.gz | tar xf -
3. Install the Floating License  
   mkdir /usr/tmp  
   ./lmgrd -c ./safe.lic -l safe.log    
   note: When run lmgrd command,the program aborts and prints:lmgrd: No such file or directory. A possible reason are missing Linux Standard Base (LSB) components which are required by the lmgrd.the solution is run apt-get install lsb.
