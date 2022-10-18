import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';

const FooterSocialNet = () => {
return (
    <>
        <div className="py-6 px-8 bg-gray-400/30 md:flex md:items-center md:justify-between">
            <span className="text-sm text-gray-300 sm:text-center">© 2022 <a href="https://inkside.com.ar/">Inkside™</a>. All Rights Reserved.</span>
            <div className='flex mt-4 space-x-6 sm:justify-center md:mt-0'>
                <a href=""><InstagramIcon /></a>
                <a href=""><FacebookIcon /></a>
                <a href=""><TwitterIcon /></a>
            </div>
        </div>
    </>
)
}

export default FooterSocialNet