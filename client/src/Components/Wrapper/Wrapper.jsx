import useThemeStore from "../../store/useThemeStore"

const Wrapper = ({ children }) => {
  const { darkMode } = useThemeStore();

  return (
    <>
      <div className={`main-wrapper ${darkMode ? 'dark' : ''}`}>
        {children}
      </div>
    </>
  )
}

export default Wrapper
