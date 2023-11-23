

const Secret = () => {
    return (
        <div className="flex justify-center">
        <div className="flex md:flex-row flex-col justify-center max-w-7xl m-4">
          <div className="lg:w-1/2 bg-black">
            <div className="flex justify-center flex-col items-center">
              <div className="text-white m-6 text-xl z-200">Contact Us</div>
              <div className="text-white m-6 z-200">We are always here to help out whatever way we can </div>
              <div className="text-white m-6 z-200">
                <div className="flex m-2">
                  <ion-icon name="person-outline" className="m-2"></ion-icon>
                  <input placeholder="Name" className="bg-gray-800 p-2 rounded-3xl" />
                </div>
                <div className="flex m-2">
                  <ion-icon name="mail-outline" className="m-2"></ion-icon>
                  <input placeholder="E-mail" className="bg-gray-800 p-2 rounded-3xl" />
                </div>
                <div className="flex m-2">
                  <ion-icon name="call-outline" className="m-2"></ion-icon>
                  <input placeholder="Phone" className="bg-gray-800 p-2 rounded-3xl" />
                </div>
                <div className="flex m-2">
                  <ion-icon name="create-outline" className="m-2"></ion-icon>
                  <input placeholder="Type your message" className="bg-gray-800 p-2 rounded-3xl" />
                </div>
                <div className="block m-2 justify-center">
                  <div className="bg-blue-700 p-2 rounded-3xl hover:bg-blue-800 cursor-pointer">
                    <div className="flex justify-center">Send</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-3/4 lg:w-2/3">
            <div className="w-3/4 lg:w-1/2 overflow-contain h-min">
            <iframe src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d53974568.81057186!2d7.799472060984933!3d34.34166511918863!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m5!1s0x375054cc3abd02f9%3A0x9ac793f52e45b85a!2sMira%20Bazar%2C%20Sylhet!3m2!1d24.897209699999998!2d91.88398!4m0!5e0!3m2!1sen!2sbd!4v1700415814757!5m2!1sen!2sbd"  width="375" height="667" style={{ border: '0' }} allowFullScreen="" loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"></iframe>
           
            </div>
          </div>
        </div>
      </div>
    );
};

export default Secret;