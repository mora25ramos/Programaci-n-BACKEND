import {fileURLToPath} from 'url'
import {dirname} from 'path'
import multer from 'multer'

const _filename = fileURLToPath(import.meta.url);
const _dirname = dirname(_filename)

//Tutorial MULTER
const storage = multer.diskStorage( {
    destination: (req, file, cb) => {
        cb(null, `${_dirname}/public/img`)
    },
    filename: (req, file, cb) => {
        cb(null, `${Date.now()}-${file.originalname}`)
    }
});

const uploader = multer ({
    storage, onError: (err, next)=>{
        console.log(err)
        next()
    }
});

export {
    _dirname,
    uploader
};

