# aelf Smart Contract

* Create  AElf uses a DPoS consensus type in which miners collect transactions and, according to a schedule, package them into blocks that are broadcast to the network.

#Commands for environment configurations
 ## Ensure .NET SDK 8.0.101  is installed

 ## verify installation
 ```
dotnet --version 
 ```

 ## Create Project using Template
 ```
 mkdir first_contract_aelf && cd first_contract_aelf
```
## install  smart contract templates provided by aelf
```
dotnet new install AElf.ContractTemplates
```
## create a new smart contract project
```
dotnet new aelf -n MyCharacter

```
## test smart contract , head to test dir
```
dotnet test
```

## compile and build smart contract 
```
dotnet build
```
