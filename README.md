
___  
# Bitcoin Hasher
___
#### About the application
1. Bitcoin Hasher - a small client-server application written in the Node.js platform.
2. Bitcoin Hasher is designed to download and generate preimages of downloaded hashes from the Blockchain website.
3. The application was developed on the basis of reading the article presented in pdf format: __[link to article](http://math.isu.ru/ru/chairs/tpdm/docs/Platonovskie2019/Gilmanshin-R.-R.pdf)__
#### For what ?
To find collisions in the hashing algorithm SHA-256.
#### Installing the app
To install Bitcoin Hasher, follow the instructions:
1. Install the Node.js framework: https://nodejs.org/en/
2. Download app files from GitHub
3. In the application, open the Command Prompt by calling: 
```
  Shift + RMB -> Open a command window
```
4. In the console, enter the command, In an open browser, go to http://localhost:8000
```
  npm run dev
```
5. See instructions for using the application...
#### Working with the application
To work with the Bitcoin Hasher app, follow the instructions:
1. After opening the application in the browser, enter the hash of the initial block of the Blockchain network. You can view all blocks on the Blockchain website: https://www.blockchain.com/explorer/?utm_campaign=dcomnav_explorer
(For example, the hash of the block is indicated: 00000000000000000005025da315f71a6b96aa90f49ad29814dd4f11015adeeb, the block has 665862 position in the Blockchain)
2. Click on the button: __Generate__
3. After that, the process of generating transactions specified in the blocks will go. You can view the generated transactions in the folder with the application: __/db_blocks__
4. To stop generating, click on the __"Terminate the connection"__ button
5. To exit the application, close the command line and the page in the browser.
#### Example of application work
```
Exodus: ddb508a06f705c13b97e21f438100dd6464747e20eb72f00708f673cac253151 | Output: 5c1e6c7ac7b7e16811947dee99767b633b153f9af0cacffffc174dbf71d1a415
Exodus: f248d1ee3f21ef8a5681df204c00e3579a7a803f83717da9638f2ef7a80d0ec7 | Output: 1d36c0d8f563363252b927d8fb69273ea3293a3dbf0077b6e076c1be0863f9a4
Exodus: 0c7c7f63b37632edbe8406daad14e683865a85d6f7ba4b78589791172bd47cdc | Output: d8e61abb73e14c9b81f414f7a8837a7e14c595ab89518d77e108b8f1de2794e1
Exodus: 6a2a0dd51a3af7525ff0e9890d3fe52ea39de5c8db057f4b0aa5c0df55ec6fa3 | Output: 683b8d5a5268f2a80bb139443dae3f73587af32546afabeccf6166f683d2a022
Exodus: 54172e1f165d37cb99c2046aea0c9f9856e82d6daa8d87fe05af16089f6850ae | Output: 28af69c2ee390f2ddfb3f57f1b749e5af72c12e4bef7079bd06d6059cbc35a4f
```



