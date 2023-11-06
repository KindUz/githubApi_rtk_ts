import loading from '../images/loading.svg'

const Loading = () => {
  return (
    <div className="flex items-center justify-center w-[128px] h-[128px] mx-auto">
        <img className="w-full h-full" src={loading} alt="" />
    </div>
  )
}

export default Loading