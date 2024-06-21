// eslint-disable-next-line react/prop-types
export const SlideReviewPc = ({avatar, name, review}) => {
    return (
        <swiper-slide>
            <article className="w-auto p-6 border-2 rounded-md shadow-lg">
                <div className="flex items-center gap-3 mb-3 flex-start">
                    <img className="object-cover rounded-full" src={avatar} alt="Avatar Perfil" />
                    <div>
                        <h3 className="font-semibold">{name}</h3>
                        <span className="star text-[#eb6e00]"></span>
                        <span className="star text-[#eb6e00]"></span>
                        <span className="star text-[#eb6e00]"></span>
                        <span className="star text-[#eb6e00]"></span>
                        <span className="star text-[#eb6e00]"></span>
                    </div>
                </div>
                <p className="text-sm text-slate-500">{review}</p>
            </article>
        </swiper-slide>
    )
}