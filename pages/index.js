import Image from "next/image";
import celsius from '../public/celsius.png'

export default function Home() {
    return (
        <div>
            <div className={"grid h-screen place-items-center"}>
                <div className={"col-auto"}>
                    <Image src={celsius} className={"mask mask-circle"} width={200} height={200}/>
                    <p className={"text-center text-3xl font-semibold"}>celsius narhwal</p>
                    <div className={"row-auto justify-items-center"}>
                        <p className={"text-center pt-2 text-4xl"}>
                            <a href="https://github.com/celsiusnarhwal" target={"_blank"} rel={"noreferrer"}>
                                <i className="fa-brands fa-github hover:brightness-200"/>
                            </a>
                            <a href="https://twitter.com/celsiusnarhwal" target={"_blank"} rel={"noreferrer"}>
                                <i className={"fa-brands fa-twitter pl-3 hover:brightness-200"}/>
                            </a>
                            <a href="mailto:hello@celsiusnarhwal.dev">
                                <i className="fa-solid fa-envelope pl-3 hover:brightness-200"/>
                            </a>
                        </p>
                    </div>
                </div>
            </div>
            <div className={"footer footer-center p-4 bg-base-300 text-base-content"}>
                <div>
                    <p>© {new Date().getFullYear()} celsius narhwal. Thank you kindly for your attention.</p>
                </div>
            </div>
        </div>
    )
}