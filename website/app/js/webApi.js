import Superagent from 'superagent';
import combineUrl from 'utils/combineUrl';

export default function asyncData(param) {
  return new Promise((resolve, reject) => {
    Superagent[param.method](combineUrl(param.path))
      .end((err, res) => {
        if (err) {
          reject(err);
          return null;
        }
        resolve(res.body);
      });
  });
}
