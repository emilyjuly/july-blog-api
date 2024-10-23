import { diskStorage } from 'multer';
import * as path from 'path';

export const multerConfig = {
  storage: diskStorage({
    destination: './uploads', // Pasta onde os arquivos serão armazenados
    filename: (req, file, cb) => {
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
      const ext = path.extname(file.originalname); // Pega a extensão
      const name = path.basename(file.originalname, ext); // Nome sem extensão
      cb(null, `${name}-${uniqueSuffix}${ext}`); // Ex: imagem-123456789.png
    },
  }),
};
