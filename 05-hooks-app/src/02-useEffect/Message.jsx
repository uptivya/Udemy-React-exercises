import { useEffect } from "react"

export const Message = () => {
    const onMouseMove = (x,y) => {
        const coords = {x,y}
        console.log(coords);
    }
    useEffect(() => {
      window.addEventListener('mousemove', onMouseMove);
    
      return () => {
        window.removeEventListener('mousemove', onMouseMove);
      }
    }, [])
    
  return (
    <h3>Aquest usuari ja existeix</h3>
  )
}
