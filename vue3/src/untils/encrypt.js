//js解密加密
import CryptoJs from 'crypto-js'

//加密
export function encrypt(word,keystr){
    keystr = keystr?keystr:'123456789abc';
    var key =CryptoJs.enc.Utf8.parse(keystr);
    var srcs =CryptoJs.enc.Utf8.parse(word);
    var encrypted = CryptoJs.AES.encrypt(srcs,key,{mode:CryptoJs.mode.ECB,padding:CryptoJs.pad.Pkcs7});
    return encrypted.toString();
}
//解密
export function decrypt(word,keystr){
    keystr = keystr?keystr:'123456789abc';
    var key = CryptoJs.enc.Utf8.parse(keystr);
    var decrpyt = CryptoJs.AES.decrypt(word,key,{mode:CryptoJs.mode.ECB,padding:CryptoJs.pad.Pkcs7});
    return CryptoJs.enc.Utf8.stringify(decrpyt).toString();

}
