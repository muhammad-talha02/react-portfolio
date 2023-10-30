type ToogleButtonProps = {
  setOpen: (value: boolean | ((prevVal: boolean) => boolean)) => void
}

const ToggleButton = ({ setOpen }: ToogleButtonProps) => {
  return (
    <button onClick={() => setOpen((prev) => !prev)}>Button</button>
  )
}

export default ToggleButton