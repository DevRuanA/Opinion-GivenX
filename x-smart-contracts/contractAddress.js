const contractAddress = "0xa182f4a8A38Aee4d08D240a9d657Dd7D554c8c67"; // Não use esse endereço, é somente um exemplo

const xPostContract = new ethers.Contract(
    contractAddress,
    contractABI,
    signer
  );
  