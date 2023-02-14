const crypto = require('crypto')

class JWT {
  constructor({crypto}){
  this.crypto = crypto
  }

  sign(data, options = {}){
    const header = this.encode({ typ:"JWT", alg:"HS256"})
    const payload = this.encode({...data, ...options})
    const signature = this.createSignature([header, payload])

    return [header, payload, signature].join('.')
  }


  verify(token, salt){
    const [header, payload, signature] = token.split('.')
    const newSignature = this.createSignature([header, payload], salt)

    if (newSignature !== signature){
      throw new Error('not exist')
    }
    return this.decode(payload)
  }

  encode(obj){
    return Buffer.from(JSON.stringify(obj).toString("base64url").replace(/[=]/g, ""))
  }

  decode(base64url){
    return JSON.parse(Buffer.from(base64url, "base64url").toString("utf-8"))
  }

  createSignature(base64urls, salt='jung'){
    const data = base64urls.join('.')
    return this.crypto.createHmac("sha256", salt).update(data).digest("base64url").replace(/[=]/g, "")
  }
}

module.exports = JWT

