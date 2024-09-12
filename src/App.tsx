import './assets/style.css'
import { LazyImage } from "./components/LazyImage"

function App() {
  return (
    <div>
      <h1>Lazy Loading com Blur Up e Intersection Observer</h1>

      <div className="wrapper">
        {Array.from({ length: 100 }).map((_, index) => {
          const id = index + 1
          return (
            <LazyImage
              key={id}
              placeholderSrc={"https://placedog.net/50/50?id="+id}
              src={"https://placedog.net/1500/1500?id="+id}
              alt="Uma bela paisagem"
            />
          )
        })}
      </div>
    </div>
  )
}

export default App
