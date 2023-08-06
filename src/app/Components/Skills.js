import Image from "next/image"
export default function Projects() {
  const lngs = ['TypeScript','JavaScript','HTML','CSS','Python']
  const frameworks = ['Next.js','React','React-Native','Node.js']
  const tools = ['GitHub','FireStore','AWS','Docker','Postman','MongoDB','Twilio']
    return (
      <main id="skills" className="mt-32 center">
        <div className="grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-1 gap-16">
          <div className="ml-3">
            <h2 className="mb-4">Languages</h2>
            {
              lngs.map((v,i)=>{
                return <div className=" flex items-start mb-2 items-center" key={i}><div className="skillIcon"><Image className=" mr-3" width={50} height={50} src={`/icons/${v}.png`} alt={v}/></div> <p>{`  ${v}`}</p></div>
              })
            }
          </div>
          <div className="ml-3">
            <h2 className="mb-4">Frameworks</h2>
            {
              frameworks.map((v,i)=>{
                return <div className=" flex items-start mb-2 items-center" key={i}><div className="skillIcon"><Image className=" mr-3" width={50} height={50} src={`/icons/${v}.png`} alt={v}/></div> <p>{`  ${v}`}</p></div>
              })
            }
          </div>
          <div>
            <h2 className="mb-4">Tools</h2>
            {
              tools.map((v,i)=>{
                return <div className=" flex items-start mb-2 items-center" key={i}><div className="skillIcon"><Image className=" mr-3" width={"50"} height={"50"} src={`/icons/${v}.png`} alt={v}/></div> <p>{`  ${v}`}</p></div>
              })
            
            }
          </div>
        </div>
      </main>
    )
 }
  