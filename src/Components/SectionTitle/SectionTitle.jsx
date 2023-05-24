
const SectionTitle = ({heading, subHeading}) => {
    return (
        <div className='text-center md:w-3/12 mx-auto my-8'>
            <p className='text-yellow-500 mb-2'>{subHeading}</p>
            <p className='text-3xl uppercase border-y-4 py-4'>{heading}</p>
        </div>
    );
};

export default SectionTitle;