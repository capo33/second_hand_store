import React from "react";

const Contact = () => {
  return (
    <section className='text-gray-600 body-font relative -z-10 h-screen'>
      <div className='absolute inset-0 bg-gray-300'>
        <iframe
          width='100%'
          height='100%'
          title='map'
          src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1979.3350625455791!2d25.07801797755319!3d60.25791657507728!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4692061fd964c3d9%3A0x66ce20accf5c239d!2sKankaretie%2C%2000770%20Helsinki!5e0!3m2!1sfi!2sfi!4v1691738080256!5m2!1sfi!2sfi'
          style={{}}
        />
      </div>
      <div className='container px-5 py-24 mx-auto flex'>
        <div className='lg:w-1/3 md:w-1/2 bg-white rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10 shadow-md'>
          <h2 className='text-gray-900 text-lg mb-1 font-medium title-font'>
            Details
          </h2>
          <p className='leading-relaxed mb-5 text-gray-600'>
            Mohamed Capo <br />
            Software Developer <br />
            madel413@gmail.com <br />
          </p>

          <p className='text-xs text-gray-500 mt-3'>
            Contact me for any questions
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
