import { ImageViewer } from "./client-images";
import { ArrowTopRight, GithubIconSvg, LinkedInIconSvg, PlusCircleSvg } from "./icons";

export default function Page() {

    return (
        <div className="container isolate min-h-96 my-4 min-w-[100vw]">
            <div className="bg-white grid auto-cols-auto auto-rows-min items-center rounded-xl h-full mx-auto mb-4 w-[700px] border border-slate-500 overflow-hidden">
                <header className="self-start bg-slate-600 w-full px-6  flex items-center py-3 text-white fill-current justify-between">
                    <h1 className="text-2xl"><span className="font-mono">React.</span><span className="font-noto font-light">neuronline</span> 🧠</h1>
                    <div>
                        <a target="_blank" className="text-slate-400 fill-current hover:text-white" href="https://www.linkedin.com/in/jnthn-wbr/"><span className="underline underline-offset-4 decoration-dotted italic text-sm">Check me (Jonathan) out! &rarr;</span> <LinkedInIconSvg className="ml-1 inline-block" /></a>
                        <a target="_blank" className="text-slate-400 fill-current hover:text-white" href="https://github.com/jernwerber"><GithubIconSvg className="ml-2 inline-block" /></a>
                    </div>
                </header>

                <main className="isolate relative overflow-hidden group">
                    <ImageViewer />                    
                </main>

                <footer className="bg-slate-700 min-h-12 self-end w-full px-6 py-8 grid auto-cols-auto auto-rows-auto gap-8 items-center group">
                <p className="border border-slate-500 text-base p-4 leading-relaxed">
                    Wiper-Bergeron N, <BubbleSpan colorClass="bg-gradient-to-tr from-blue-800 to-blue-500">Weber J</BubbleSpan>, Imbeault S, Goodwin S. Neuronline. <span className="italic">MedEdPORTAL</span>. 2011;7:8266. <ExternalLink href="https://doi.org/10.15766/mep_2374-8265.8266">https://doi.org/10.15766/mep_2374-8265.8266</ExternalLink>. <span className="text-slate-400">This is an open-access publication distributed under the terms of the <ExternalLink href="https://creativecommons.org/licenses/by-nc-sa/4.0/legalcode">Creative Commons Attribution-NonCommercial-Share Alike (CC BY-NC-SA)</ExternalLink> license.</span> 
                    </p>
                    <ul className="font-noto flex gap-1"><li className="font-lora italic">Tags:</li>
                    <li>
                        <BubbleSpan colorClass="bg-slate-600">React</BubbleSpan>
                    </li>
                    <li>
                        <BubbleSpan colorClass="bg-slate-600">NextJS</BubbleSpan>
                    </li>
                    <li>
                        <BubbleSpan colorClass="bg-slate-600">Tailwind</BubbleSpan>
                    </li>
                    <li>
                        <BubbleSpan colorClass="bg-slate-600">TypeScript</BubbleSpan>
                    </li>
                    <li>
                        <BubbleSpan colorClass="bg-slate-600">HTML5</BubbleSpan>
                    </li>
                    <li>
                        <BubbleSpan colorClass="bg-slate-600">JavaScript</BubbleSpan>
                    </li>    
                    <li>
                        <BubbleSpan colorClass="bg-slate-600">CSS</BubbleSpan>
                    </li>
                    <li>
                        <BubbleSpan colorClass="bg-slate-600">Medical education</BubbleSpan>
                    </li>
                    </ul>
                    <details
                        className="ml-5 -mb-1 text-pretty leading-relaxed"
                        >
                        <summary 
                        className="text-xl list-outside cursor-pointer font-semibold font-poppins"
                        >Description
                        </summary>
                    <blockquote className="-ml-5 mt-4 font-lora pl-6 border-l-8 border-slate-500 leading-relaxed first-letter:text-5xl first-line:italic first-letter:text-white first-letter:translate-y-6 
  first-letter:mr-2 first-letter:not-italic first-letter:float-left italic"
                    >A good understanding of the 3D organization of deep brain structures is essential to understand brain function, to predict functional deficits following lesion or trauma, and to interpret radiological images. To improve learning of deep cerebral structures for novice neuroanatomists, a stereoscopic, rotatable view of a human brain was used to create a virtual brain that can be rotated in an easy-to-use web-based module: Neuronline. Learners can also slice the virtual brain in both the coronal and horizontal planes, allowing for the identification of deep brain structures. Each brain slice is matched to a corresponding MRI image and labels can be toggled on or off. An orientation diagram helps students locate a structure within the virtual brain. This tool is designed for learners with limited neuroanatomy experience. For the student new to neuroanatomy, learning the organization of deep brain structures and fiber tracts can be daunting. Neuronline also has the advantage of being portable, and can be used prior to gross anatomy lab sessions or in-lab as a study guide.</blockquote>
                    </details>

                    <hr className="border border-dashed border-slate-500" />

                    <details className="-mt-2 font-lora text-base leading-relaxed [&>.the-story]:pt-2 [& .the-story] ml-5 text-pretty">
                        <summary className="text-xl list-outside cursor-pointer "><span className="font-semibold font-poppins">What is this?</span> 🤔 <span className="italic">The story...</span>
                        </summary>
                        <p className="mt-4 the-story first-letter:text-5xl first-line:italic first-letter:text-white
  first-letter:mr-2 first-letter:not-italic first-letter:font-serif first-letter:float-left">When I was a wee lad, I worked with a professor at the <BubbleSpan>University of Ottawa's Faculty of Medicine</BubbleSpan>, <BubbleSpan>Dr. Nadine Wiper-Bergeron</BubbleSpan>, to develop some interactive e-learning tools to help undergraduate medical students learn about anatomy and histology.</p>

                        <p className="the-story">One such tool, <BubbleSpan colorClass="bg-gradient-to-tr from-purple-900 to-pink-700">Neuronline</BubbleSpan>, was a web-based tool to support neuroanatomy (brain anatomy) learning. It featured a number of image collections (digital photos) that we had taken of an actual human brain specimen:
                        </p>
                        <ul className="the-story list-disc *:pb-2 ml-6">
                            <li>
                                One set was a full, 360&deg; rotation of the brain around the vertical axis of the human body (think orbit&mdash;<span className="italic">this is what's loaded in above!</span>).
                            </li>
                            <li>
                                Another set of was a full rotation of the brain specimen around the sagittal axis (think rolling) such that the structures on the underside in particular were visible.
                            </li>
                            <li>
                                After having taken all the pictures we needed for the other two views, we had the brain sliced by a Faculty of Medicine anatomy lab prosector, <BubbleSpan>Shannon Goodwin</BubbleSpan>, along the sagittal axis to get a set of images of internal human brain structures.
                            </li>
                        </ul>
                        <p className="the-story">This last set we also placed side-by-side with MRI images that matched the slice positions to help students visualize how the brain structures translate to whatever they might see from MRI imaging. </p>
                      
                        
                        <p className="the-story">Using the tools and my skills at the time, I built an application using Adobe Flash and ActionScript 2 (or 3?) to provide a controls for navigating the brain images. This worked great, it even was published to the <ExternalLink href="https://www.mededportal.org/doi/10.15766/mep_2374-8265.8266">Association of American Medical Colleges's MedEdPORTAL</ExternalLink> in 2011 to make it more broadly accessible.</p> 

                        <p className="the-story">Alas, nothing can last forever, especially when it comes to technology. In this case, the <ExternalLink href="https://www.adobe.com/ca/products/flashplayer/end-of-life-alternative.html#adobe-flash-player-eol-general-information">technologies that I used, Adobe Flash and ActionScript, were both eventually discontinued</ExternalLink> as web interactivity became progressively more fully-featured, rendering this application unusable. This here is an attempt to rebuild at least some of it using modern technologies such as HTML5, JavaScript (+TypeScript), CSS (+Tailwind) & React (+NextJS) in the hopes that it can continue to live on in some form.</p>
                    </details>
                </footer>
            </div>
        </div>
    );
}

export function BubbleSpan( { children, colorClass="bg-slate-800" } : { children: string, colorClass?: string }) {
    return (
        <span 
            className={`px-2 pt-[2px] pb-[2px] rounded-full font-noto text-sm font-[400] whitespace-nowrap ${ colorClass }`}
            style={{
                fontStretch: ''
            }}
        >
            { children }
        </span>
    )
}



export function ExternalLink( { children, href="#" } : {children: string, href: string}) {
    return (
        <a href={`${ href }`} target="_blank" className="underline underline-offset-4 decoration-dotted hover:decoration-solid">{ children } <ArrowTopRight className="inline size-3" /></a>
    );
}