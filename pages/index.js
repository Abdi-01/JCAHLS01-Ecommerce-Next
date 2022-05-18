import axios from "axios";
import Banner from "../components/Banner";
import HeadMeta from "../components/HeadMeta";
import NavbarComponent from "../components/Navbar";
import { Button, CardBody } from 'reactstrap';
// export const getServerSideProps = async (context) => {
//   try {
//     // console.log("Cek context", context)
//     // let res = await axios.get("http://localhost:5000/banner")
//     console.table(res.data);

//     return {
//       props: {
//         banner: res.data
//       }
//     }

//   } catch (error) {
//     console.log(error)
//   }
// }

export default function Home(props) {

  // console.log(props.banner)
  // useEffect
  return (
    <div className="container-fluid">
      <NavbarComponent />
      <HeadMeta
        title="Ecommerce | Next"
        description="Jual perabotan mutah berkualitas"
        img="https://except.eco/media/images/Ikea_Dashboard.width-1600.jpegquality-95.jpg"
      />
      <div style={{ backgroundColor: "#97A0B0" }}>
        {/* <Banner bannerList={props.banner} /> */}
      </div>
      <div className="container">
        <div className='row'>
          <div className='col-12 col-md-4 text-center'>
            <CardBody>
              {/* <img className='rounded-circle' alt="" src='https://miro.medium.com/max/598/0*8or0oFmHDRKnlETg' width="180px" /> */}
              <h3>Category 1</h3>
              <p>
                Some representative placeholder content for the three columns of text below the carousel. This is the first column.
              </p>
              <Button color='secondary'>Detail</Button>
            </CardBody>
          </div>
          <div className='col-12 col-md-4 text-center'>
            <CardBody>
              {/* <img className='rounded-circle' alt="" src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYDSSjj7hEq0mET7eL8cjwNWrXhSmW0dWHT2X8UBV-u8wDONeAMBnZ28JNQpSMy3UJu-s&usqp=CAU' width="180px" /> */}
              <h3>Category 2</h3>
              <p>
                Some representative placeholder content for the three columns of text below the carousel. This is the first column.
              </p>
              <Button color='secondary'>Detail</Button>
            </CardBody>
          </div>
          <div className='col-12 col-md-4 text-center'>
            <CardBody>
              {/* <img className='rounded-circle' alt="" src='https://miro.medium.com/max/598/0*8or0oFmHDRKnlETg' width="180px" /> */}
              <h3>Category 3</h3>
              <p>
                Some representative placeholder content for the three columns of text below the carousel. This is the first column.
              </p>
              <Button color='secondary'>Detail</Button>
            </CardBody>
          </div>
        </div>
      </div>
    </div>
  )
}

