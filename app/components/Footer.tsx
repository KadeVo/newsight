const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8 mt-[5%]">
      <div className="container mx-auto flex flex-col items-center">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-4 text-center">
          <div>
            <h4 className="text-xl font-semibold mb-2">About Us</h4>
          </div>
          <div>
            <h4 className="text-xl font-semibold mb-2">Contact Me</h4>
            <p>Email: kadinvo@gmail.com</p>
          </div>
        </div>
        <div className="text-sm">
          © {new Date().getFullYear()} NewSight. All rights reserved.
        </div>
        <p className="text-xs">Information gathered from NEWSAPI</p>
      </div>
    </footer>
  )
}

export default Footer
