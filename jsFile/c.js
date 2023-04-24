import CryptoJS from './s.js';

//  const key = CryptoJS.enc.Utf8.parse("ueuan12uujkhaaie"); //测试密钥
const key = CryptoJS.enc.Utf8.parse("ue23neduujk79uie"); //十六位十六进制数作为密钥sf:shishangujmyouma //ahuaneduujkyouiu
const iv = CryptoJS.enc.Utf8.parse('mahao^%$#@54^%@!'); //十六位十六进制数作为密钥偏移量 sf:mahao^%$#@54^%@!

//解密方法
const d = function (word) {
  let encryptedHexStr = CryptoJS.enc.Hex.parse(word);
  let srcs = CryptoJS.enc.Base64.stringify(encryptedHexStr);
  let decrypt = CryptoJS.AES.decrypt(srcs, key, {
    iv: iv,
    mode: CryptoJS.mode.CBC,
    padding: CryptoJS.pad.Pkcs7
  });
  let decryptedStr = decrypt.toString(CryptoJS.enc.Utf8);
  return decryptedStr.toString();
}

//加密方法
const e = function (word) {
  let srcs = CryptoJS.enc.Utf8.parse(word);
  let encrypted = CryptoJS.AES.encrypt(srcs, key, {
    mode: CryptoJS.mode.ECB,
    padding: CryptoJS.pad.Pkcs7
  });
  return encrypted.toString();
}

export default e