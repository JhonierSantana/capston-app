import React from 'react'
import { Headerbar } from '../../components/HeaderBar.jsx';
import { ListItem } from '../../components/ListItem.jsx';
import { FooterNav } from '../../components/FooterNav.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../style/App.css';
import '../../style/index.css';
import '../../style/ListItem.css';
import Container from 'react-bootstrap/esm/Container.js';

export const AquariumTop = () => {
  return (
    <>
    <Headerbar />
    <h1 className='title mt-3'>Top 10 Aquariums</h1>
    <hr />
    <Container className='Outer'>
        <div className='list1 rounded-4 my-3'>
          <img className='top_img' src={`../../img/img_top/top_10.png`} alt="Top image" />
          <h4>Holbertonlandia</h4>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus accusantium dolore perspiciatis, modi illum animi eum, recusandae nesciunt est voluptatibus facere? Aliquid a blanditiis porro facere! Corrupti nulla consectetur provident.</p>
        </div><div className='list1 rounded-4 my-3'>
          <img className='top_img' src={`../../img/img_top/top_9.png`} alt="Top image" />
          <h4>Holbertonlandia</h4>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus accusantium dolore perspiciatis, modi illum animi eum, recusandae nesciunt est voluptatibus facere? Aliquid a blanditiis porro facere! Corrupti nulla consectetur provident.</p>
        </div><div className='list1 rounded-4 my-3'>
          <img className='top_img' src={`../../img/img_top/top_8.png`} alt="Top image" />
          <h4>Holbertonlandia</h4>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus accusantium dolore perspiciatis, modi illum animi eum, recusandae nesciunt est voluptatibus facere? Aliquid a blanditiis porro facere! Corrupti nulla consectetur provident.</p>
        </div><div className='list1 rounded-4 my-3'>
          <img className='top_img' src={`../../img/img_top/top_7.png`} alt="Top image" />
          <h4>Holbertonlandia</h4>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus accusantium dolore perspiciatis, modi illum animi eum, recusandae nesciunt est voluptatibus facere? Aliquid a blanditiis porro facere! Corrupti nulla consectetur provident.</p>
        </div><div className='list1 rounded-4 my-3'>
          <img className='top_img' src={`../../img/img_top/top_6.png`} alt="Top image" />
          <h4>Holbertonlandia</h4>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus accusantium dolore perspiciatis, modi illum animi eum, recusandae nesciunt est voluptatibus facere? Aliquid a blanditiis porro facere! Corrupti nulla consectetur provident.</p>
        </div><div className='list1 rounded-4 my-3'>
          <img className='top_img' src={`../../img/img_top/top_5.png`} alt="Top image" />
          <h4>Holbertonlandia</h4>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus accusantium dolore perspiciatis, modi illum animi eum, recusandae nesciunt est voluptatibus facere? Aliquid a blanditiis porro facere! Corrupti nulla consectetur provident.</p>
        </div><div className='list1 rounded-4 my-3'>
          <img className='top_img' src={`../../img/img_top/top_4.png`} alt="Top image" />
          <h4>Holbertonlandia</h4>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus accusantium dolore perspiciatis, modi illum animi eum, recusandae nesciunt est voluptatibus facere? Aliquid a blanditiis porro facere! Corrupti nulla consectetur provident.</p>
        </div><div className='list1 rounded-4 my-3'>
          <img className='top_img' src={`../../img/img_top/top_3.png}`} alt="Top image" />
          <h4>Holbertonlandia</h4>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus accusantium dolore perspiciatis, modi illum animi eum, recusandae nesciunt est voluptatibus facere? Aliquid a blanditiis porro facere! Corrupti nulla consectetur provident.</p>
        </div><div className='list1 rounded-4 my-3'>
          <img className='top_img' src={`../../img/img_top/top_2.png`} alt="Top image" />
          <h4>Holbertonlandia</h4>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus accusantium dolore perspiciatis, modi illum animi eum, recusandae nesciunt est voluptatibus facere? Aliquid a blanditiis porro facere! Corrupti nulla consectetur provident.</p>
        </div><div className='list1 rounded-4 my-3'>
          <img className='top_img' src={`../../img/img_top/top_1.png`} alt="Top image" />
          <h4>Holbertonlandia</h4>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus accusantium dolore perspiciatis, modi illum animi eum, recusandae nesciunt est voluptatibus facere? Aliquid a blanditiis porro facere! Corrupti nulla consectetur provident.</p>
        </div>
    </Container>
    <FooterNav />
    </>
  )
}
