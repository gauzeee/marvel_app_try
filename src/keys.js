import CryptoJS from 'crypto-js';

export default function() {
    const publicKey = '4a711ca1d6db6ea6a564223071578da7';
    const ts = Date.now();
    const privateKey = '8aa911b1690fe3e1be73513397046ca44ffb92cb';

    const hash = CryptoJS.MD5(ts + privateKey + publicKey);

    return `ts=${ts}&apikey=${publicKey}&hash=${hash}`;
}