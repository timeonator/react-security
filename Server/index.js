import express, { response } from 'express';
import jwt from 'express-jwt';
import cors from 'cors';
import jwks from 'jwks-rsa';
import bodyParser from 'body-parser';

const app = express();
const PORT = 4000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));
app.use(cors());

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

app.get('/content',(req,res)=>{
    let content = [
        {
        "id": 1,
        "first_name": "Byram",
        "last_name": "Ickovici",
        "email": "bickovici0@so-net.ne.jp",
        "gender": "Male",
        "ip_address": "197.178.1.242",
        "content": "Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.\n\nFusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.\n\nSed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus."
      }, {
        "id": 2,
        "first_name": "Constantine",
        "last_name": "Nicklin",
        "email": "cnicklin1@mayoclinic.com",
        "gender": "Bigender",
        "ip_address": "236.183.125.199",
        "content": "Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris."
      }, {
        "id": 3,
        "first_name": "Alice",
        "last_name": "Gilbane",
        "email": "agilbane2@dell.com",
        "gender": "Genderqueer",
        "ip_address": "255.170.215.194",
        "content": "Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis."
      }, {
        "id": 4,
        "first_name": "Lucas",
        "last_name": "Atter",
        "email": "latter3@cnbc.com",
        "gender": "Polygender",
        "ip_address": "155.125.223.44",
        "content": "Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.\n\nDuis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit."
      }, {
        "id": 5,
        "first_name": "Leonora",
        "last_name": "Godfroy",
        "email": "lgodfroy4@umn.edu",
        "gender": "Genderfluid",
        "ip_address": "16.76.97.118",
        "content": "Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.\n\nProin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem."
      }, {
        "id": 6,
        "first_name": "Judith",
        "last_name": "Kilgannon",
        "email": "jkilgannon5@biglobe.ne.jp",
        "gender": "Genderfluid",
        "ip_address": "196.10.148.248",
        "content": "Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.\n\nFusce consequat. Nulla nisl. Nunc nisl."
      }, {
        "id": 7,
        "first_name": "Hilliary",
        "last_name": "Barrowclough",
        "email": "hbarrowclough6@mtv.com",
        "gender": "Genderqueer",
        "ip_address": "227.52.26.132",
        "content": "Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque."
      }, {
        "id": 8,
        "first_name": "Elsworth",
        "last_name": "Welbeck",
        "email": "ewelbeck7@aboutads.info",
        "gender": "Genderqueer",
        "ip_address": "102.153.244.17",
        "content": "Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.\n\nCum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus."
      }, {
        "id": 9,
        "first_name": "Bibby",
        "last_name": "Heimes",
        "email": "bheimes8@sohu.com",
        "gender": "Genderqueer",
        "ip_address": "20.112.118.67",
        "content": "Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.\n\nMaecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.\n\nCurabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem."
      }, {
        "id": 10,
        "first_name": "Hershel",
        "last_name": "Dagnall",
        "email": "hdagnall9@arstechnica.com",
        "gender": "Genderqueer",
        "ip_address": "23.149.158.35",
        "content": "In congue. Etiam justo. Etiam pretium iaculis justo.\n\nIn hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus."
      }];
      res.json(content);
})
