type ToogleButtonProps = {
  setOpen: (prev) => void
}

const ToggleButton = ({ setOpen }: ToogleButtonProps) => {
  return (
    <button onClick={() => setOpen((prev)=>!prev)}>Button</button>
  )
}

export default ToggleButton