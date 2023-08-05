import Image from "next/image"
export default function Projects() {
  const lngs = ['Python','React','React-Native','Node.js','JavaScript','HTML','CSS']
  const tools = ['FireStore','AWS','Docker','Postman','MongoDB','Twilio']
    return (
      <main id="skills" className="min-h-screen center">
        <div className="grid grid-cols-2 gap-32 place-content-evenly h-48">
          <div className="ml-3">
            <h2 className="mb-4">Languages</h2>
            {
              lngs.map((v,i)=>{
                return <div className=" flex items-start mb-2" key={i}><div className="skillIcon"><Image className="skillsIcons mr-3" width={"50"} height={"50"} src={`/icons/${v}.png`} alt={v}/></div> <p>{`  ${v}`}</p></div>
              })
            }
          </div>
          <div>
            <h2 className="mb-4">Tools</h2>
            {
              tools.map((v,i)=>{
                return <div className=" flex items-start mb-2" key={i}><div className="skillIcon"><Image className="skillsIcons mr-3" width={"50"} height={"50"} src={`/icons/${v}.png`} alt={v}/></div> <p>{`  ${v}`}</p></div>
              })
            
            }
          </div>
        </div>
      </main>
    )
 }
  