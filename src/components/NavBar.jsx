export default function NavBar() {
  return (
    <div className="flex items-center justify-between px-6 p-4 w-[800px]">
      <h1 className="w-32 text-3xl font-semibold">OZ무비.</h1>
      <div className="border border-gray-300 rounded px-3 py-1 ">
        <input type="text" className="focus:outline-none w-[450px]" />
      </div>
      <div className="flex gap-4">
        <button>로그인</button>
        <button>회원가입</button>
      </div>
    </div>
  );
}
