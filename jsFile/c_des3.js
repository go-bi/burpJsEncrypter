/**
 * 本组件主要用于des3解密
 * 本组件使用时需要导入DES3.js
 */
function C_Des3() {

}

/**
 * 密钥 长度不得小于24
 */
C_Des3.KEY = "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx";

/**
 * 解密
 * @param data 代表需要解密处理的数据
 * @returns 返回解密后的实体
 */
C_Des3.decrypt = function (data) {
    var des3de = DES3.decrypt(C_Des3.KEY, data);
    return des3de;
};

/**
 * 加密
 * @param data 代表需要加密处理的数据
 * @returns 返回加密后的实体
 */
C_Des3.encrypt = function (data) {
    var des3en = DES3.encrypt(C_Des3.KEY, data);
    return des3en;
};