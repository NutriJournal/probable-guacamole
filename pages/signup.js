import AltLayout from '../components/AltLayout'
import ThunderboltSVG from '../components/svg/ThunderboltSVG';

const SignUp =() => {
  return (
    <AltLayout>
      <div className="flex flex-col items-center mt-12">
        <div className="flex" >
          <ThunderboltSVG />
          <h1 className="text-2xl font-medium">Let's Get Started</h1>
        </div>
        <h2 className="text-xl font-extrabold">Sign Up</h2>
      </div>
      <form className="flex flex-col w-full">
        <div className="flex flex-col my-2">
          <label className="text-xs">Your Name</label>
          <input
            className="w-full border rounded pl-2 py-3"
            placeholder="First and Last Name"
          />
        </div>
        <div className="flex flex-col my-2">
          <label className="text-xs px-2">E-mail</label>
          <input
            className="w-full border border-gray-200 rounded pl-2 py-3"
            placeholder="email@email.com"
          />
        </div>
        <div className="flex flex-col my-2">
          <label className="text-xs">Password</label>
          <input
            className="w-full border border-gray-200 rounded pl-2 py-3"
            placeholder="password"
          />
        </div>
        <div className="flex flex-col my-2">
          <label className="text-xs">Verify Password</label>
          <input
            className="w-full border border-gray-200 rounded pl-2 py-3"
            placeholder="password"
          />
        </div>
        
      </form>
      <h3 className="text-bold">You're one step closer to achieving your goals</h3>
      <div className="flex content-around">
        <button>Cancel</button>
        <button>Continue</button>
      </div>
    </AltLayout>
  )
}

export default SignUp