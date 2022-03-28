//Java调用的主函数
function burpJsEncrypter(rawPayload){

	var encryptedPayload;


	//===============加密开始=================

	encryptedPayload = hex_md5(rawPayload);
	// encryptedPayload = C_Des3.encrypt(rawPayload);
	//===============加密结束=================

	return encryptedPayload;
}
