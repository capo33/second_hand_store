import React from "react";

const Contact = () => {
  return (
    // <section className='text-gray-600 body-font relative -z-10 h-screen'>
    //   <div className='container p-24 mx-auto mt-10 flex'>
    //     <div className='w-full bg-white rounded-lg p-8 flex flex-col  shadow-md'>
    //       <h2 className='text-gray-900 text-lg mb-1 font-medium title-font'>
    //         Details
    //       </h2>
    //       <p className='leading mb-5 text-gray-600'>
    //         Mohamed Capo <br />
    //         Software Developer <br />
    //         madel413@gmail.com <br />
    //       </p>

    //       <p className='text-xs text-gray-500 mt-3'>
    //         Contact me for any questions
    //       </p>
    //     </div>
    //   </div>
    // </section>
    <div className='container mx-auto px-4'>
      <div className='flex flex-col'>
        <div className='overflow-x-auto sm:mx-0.5 lg:mx-0.5'>
          <div className='py-2 inline-block min-w-full sm:px-6 lg:px-8'>
            <div className='overflow-hidden'>
              <table className='min-w-full'>
                <thead className='bg-white border-b'>
                  <tr>
                    <th
                      scope='col'
                      className='text-xl font-medium text-gray-900 px-6 py-4 text-left'
                    >
                      #
                    </th>
                    <th
                      scope='col'
                      className='text-xl font-medium text-gray-900 px-6 py-4 text-left'
                    >
                      Name
                    </th>
                    <th
                      scope='col'
                      className='text-xl font-medium text-gray-900 px-6 py-4 text-left'
                    >
                      Title
                    </th>
                    <th
                      scope='col'
                      className='text-xl font-medium text-gray-900 px-6 py-4 text-left'
                    >
                      Email
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className='bg-gray-100 border-b'>
                    <td className='px-6 py-4 whitespace-nowrap text-lg font-medium text-gray-900'>
                      1
                    </td>
                    <td className='text-lg text-gray-900 font-light px-6 py-4 whitespace-nowrap'>
                      Mohamed Mahmoud
                    </td>
                    <td className='text-lg text-gray-900 font-light px-6 py-4 whitespace-nowrap'>
                      Software Developer
                    </td>
                    <td className='text-lg text-gray-900 font-light px-6 py-4 whitespace-nowrap'>
                      madel413@gmail.com
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
