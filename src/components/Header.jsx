import { useState, useEffect } from 'react';

export const Header = () => {
    const [background, setBackground] = useState('transparent');
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const offsetY = window.scrollY;
            if (offsetY > 100) {
                setBackground('rgba(255, 255, 255, 1)');
                setIsScrolled(true);
            } else {
                setBackground('transparent');
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
            <div>
                <header className="mx-auto w-full flex justify-between items-center">
                    <div className='flex justify-between'>
                        <div className='w-full skyline-img relative'>
                            <div className="absolute inset-0 bg-gradient-to-b from-pantole-dark via-pantone-light to-white opacity-60"></div>
                            <img src="/images/skyline-barcelona.jpg" alt="Skyline Barcelona" className="w-full h-full object-cover" />
                            <section className='absolute ms-10 bottom-10 right-10 bg-white p-5 rounded-md shadow-md'>
                                <h1 className='text-pantole-dark font-montserrat font-bold'>La solucion a la gestion inmobiliaria</h1>
                                <h2 className='text-pantole-dark font-montserrat'>Venta de pisos, casas, alquiler</h2>                                
                                <select className='px-3 py-1 border' name="home" id="home">
                                    <option className="p-3" value="buy">Comprar</option>
                                    <option className='p-3' value="rent">Alquilar</option>
                                </select>
                            </section>
                        </div>
                        <div className={`fixed top-0 py-2 px-4 w-full flex items-center justify-between gap-5 ${background === 'rgba(255, 255, 255, 1)' ? 'bg-white' : ''}`} style={{ transition: 'background 0.7s ease', zIndex: '10' }}>
                            <div className="w-full lg:w-1/3 text-white">
                                <a href="/">
                                    <img src="/images/logo.svg" alt="Logo Housy Space" className={`${!isScrolled ? "invert-color" : ""} h-14 ms-10` } />
                                </a>
                            </div>
                            <button className="lg:hidden">
                                <img src="/images/toggle.svg" alt="Toggle button" className={` ${!isScrolled ? "invert-color" : ""} size-10`}  />
                            </button>
                            <nav className={`hidden lg:flex w-2/3 justify-around font-montserrat font-bold ${!isScrolled ? "invert-color" : ""}`}>
                                <a href="/alquiler">Alquiler</a>
                                <a href="/venta">Venta</a>
                                <a href="/compra">Compra</a>
                                <a href="/aboutUs">Sobre nosotros</a>
                                <a href="/contacto">Contacto</a>
                            </nav>
                        </div>
                    </div>
                </header>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis recusandae dignissimos non at asperiores eos praesentium excepturi suscipit consequuntur? Ullam doloribus corrupti ea doloremque culpa dignissimos omnis unde obcaecati quis.
                Quos eos praesentium quo explicabo nostrum, quis soluta possimus qui ut cum architecto rerum repellat velit assumenda non? Quae similique et debitis voluptatem tempore provident aut labore expedita minus quaerat?
                Dolore harum dolor qui sit facere reiciendis ea sequi placeat mollitia ullam veniam cumque debitis, sed, deleniti provident. Aut iusto exercitationem optio similique, ab at veritatis quia minima amet maiores.
                Error harum quis mollitia doloribus itaque, perspiciatis recusandae. Amet molestias quasi officiis! Cupiditate odit accusantium, reiciendis, dolore quod repellendus atque debitis vero saepe veniam ullam magnam incidunt enim soluta doloremque?
                Soluta provident debitis recusandae aliquid nostrum cupiditate incidunt reprehenderit eos, laborum est illum veniam magnam sapiente, id facere vel odit voluptatum maxime odio nihil minima! Aut fuga impedit quisquam officiis.
                Enim soluta esse neque laborum. Harum iure, facilis minima repudiandae eligendi hic maiores incidunt delectus pariatur! Maxime, facilis necessitatibus iste corrupti corporis numquam? Ex doloribus nostrum sed dolorem, rerum ipsum?
                Corrupti harum explicabo iste debitis asperiores nam perspiciatis velit ratione molestias! Animi nesciunt et voluptatem iste, repellat, cumque repudiandae ea, doloremque assumenda eius similique ex eum provident dolore non necessitatibus!
                Numquam cumque consequatur expedita consectetur illum tempore praesentium possimus aut placeat amet quod voluptates adipisci quibusdam obcaecati nulla vitae minima, reprehenderit atque necessitatibus commodi eum quos velit iste itaque! Possimus.
                Porro nesciunt doloribus autem repellendus illo debitis atque quos veritatis dolore. Cumque, qui! Natus labore excepturi amet sequi nobis deserunt corporis odit quo inventore, nesciunt maxime quia. Quia, magni! Consectetur.
                Blanditiis quas, qui atque, maiores sunt, aperiam facilis vero fuga eaque voluptatem non voluptas magni omnis cupiditate. Recusandae quis libero commodi, vitae consequatur nulla ea neque id nihil quos. Nisi.
                Architecto sit incidunt itaque. Iusto nobis error repudiandae doloribus sapiente mollitia dignissimos amet, dolor ratione atque omnis? Qui ipsam exercitationem tenetur, architecto possimus nihil assumenda eveniet debitis delectus placeat laboriosam.
                At, mollitia? Culpa ipsum accusamus quibusdam sint possimus tenetur aliquam magni nesciunt natus, vitae enim doloremque nemo dolorum velit eius cum accusantium sequi ea suscipit aperiam itaque. Voluptate, consequatur voluptatem.
                Nisi fuga sunt reprehenderit doloremque, quasi ipsa quaerat veritatis labore perspiciatis impedit totam omnis magni, ea voluptatum blanditiis dignissimos! Facilis deserunt repudiandae deleniti aliquam odio? Rem temporibus atque non tempora?
                Ex hic, accusamus soluta mollitia sit commodi consequatur explicabo cumque odit similique natus. Porro quas ducimus, expedita sint illo odio autem atque soluta cumque excepturi quaerat omnis maiores. Autem, commodi.
                Iste, voluptatibus. Pariatur sunt cupiditate nobis culpa incidunt aliquid, impedit, id inventore iste ab modi debitis illo vero quis hic praesentium alias, maiores placeat a dolore! Assumenda optio amet enim.
                Libero nesciunt eum sint dolorum, amet non fuga error beatae sed ipsum sequi. Cum, provident ipsa neque modi labore obcaecati consequatur incidunt, officia eligendi reiciendis nobis repellat minus necessitatibus nam.
                Reprehenderit exercitationem sed explicabo. Magni nam perspiciatis assumenda, commodi veniam necessitatibus error dolores! Odio id praesentium temporibus labore ipsam omnis, porro, impedit voluptatem consequatur nam maiores enim laboriosam corporis blanditiis?
                Placeat, aut nostrum beatae cumque accusamus enim reprehenderit ratione. Est vero eum cumque quos a quasi, nesciunt dicta iusto! Magni maxime repellat quidem modi. Fuga in ducimus delectus consectetur numquam?
                Neque atque consequatur voluptatum minus, tenetur, officiis in placeat non sapiente sequi libero, totam veritatis incidunt quisquam similique delectus. Natus nam, minus enim impedit porro nostrum et illum quibusdam doloribus.
                Maiores possimus sequi, vitae assumenda suscipit aspernatur. Cupiditate dicta in maiores temporibus non fugiat expedita quod labore, nemo illo, explicabo quia! Voluptatem ullam tenetur, dolore distinctio suscipit est minima. Aut.
                Tenetur atque illum quas nemo et vitae eos eius ipsa maxime rem aspernatur velit delectus quibusdam similique, est officia dolore laboriosam dicta pariatur eligendi ipsum error corporis? Facilis, illum animi?
                Minus hic repudiandae nulla laborum facilis, labore quasi libero delectus id voluptatibus, veritatis placeat, rem aut? Odio nobis, rerum adipisci consequuntur perspiciatis eius esse. Dignissimos sequi nesciunt delectus totam labore!
                Non similique aspernatur accusamus rerum, minima, minus quo ratione placeat atque nesciunt, fuga necessitatibus saepe? Hic deleniti non quae commodi error consequuntur. Aspernatur saepe magni vitae repudiandae, ad earum aut.
                Reprehenderit repellendus sint quidem illo expedita illum temporibus, dolorum vitae fugit voluptate corrupti et explicabo nam. Et, velit temporibus aliquid adipisci sunt fuga, aperiam odio nesciunt est, explicabo numquam sit.
                Cum sapiente est, tenetur hic ipsum facilis optio nulla corrupti. Sapiente cumque, repellendus qui ipsam harum laboriosam sunt corrupti voluptates quos debitis porro eius dolor consectetur saepe illum eos? Voluptas!
                Veritatis quo distinctio modi exercitationem repellat pariatur non voluptas temporibus, libero vitae voluptates ut eligendi quasi facilis? Ratione minima eum iusto, voluptatem consectetur beatae animi, dignissimos eos quos saepe nesciunt!
                Tempora neque eius blanditiis ab repellat nam a voluptatum ullam. Facere itaque delectus perspiciatis eligendi eius. Non reiciendis tempora assumenda nam numquam suscipit explicabo cupiditate corrupti, temporibus optio ducimus laborum.
                Aliquam quis impedit consequatur incidunt vitae id, corporis rem error. Reiciendis debitis aperiam eligendi provident temporibus, quae minima neque ratione dolor delectus. Quisquam amet sit doloremque magnam incidunt eos minus?
                Pariatur tempora beatae praesentium, repellat magnam ut explicabo odit optio nihil hic nam quia accusamus sapiente ex. Quod quos iusto esse soluta assumenda numquam. Nisi totam fugiat exercitationem error sequi!
                Sit eveniet molestiae ut? Voluptatum labore suscipit soluta accusamus necessitatibus officia nemo, expedita minus excepturi. Eius eligendi minima nulla modi debitis dolorem! Ad, voluptates pariatur. Eum, sapiente. Obcaecati, animi in.
                Veniam sapiente aliquid, laboriosam reiciendis error, consequatur suscipit possimus perspiciatis nam culpa minima, et a. Veniam ducimus modi nihil, repellendus nostrum reiciendis cumque, et, debitis natus animi eveniet possimus vel.
                Nobis libero nisi earum, ut aliquam deserunt ducimus? Saepe unde tempora quibusdam culpa voluptates harum, a veritatis atque? Repellendus illum praesentium nemo animi maxime provident deleniti, sint tenetur harum vitae!
                Quae consectetur consequuntur tempora, fuga asperiores excepturi accusantium minus iure quis, omnis dolorum ullam enim tempore suscipit rerum ad rem laboriosam neque expedita, fugiat error? Voluptatum consequatur esse laboriosam error.
                Sint enim perspiciatis, molestias perferendis odit ipsum officiis necessitatibus sapiente ea. Deserunt ipsam aliquid accusamus cupiditate ipsum, deleniti nisi fuga placeat distinctio explicabo obcaecati ad delectus, ratione sequi iure voluptatem!
                Minima laudantium obcaecati reiciendis asperiores ipsam temporibus quaerat aspernatur ipsum a commodi reprehenderit dolorum adipisci quisquam, fugiat dicta praesentium maxime dolores cupiditate accusamus quia id veniam velit! Minus, voluptate neque?
                Omnis nam porro exercitationem inventore at veniam culpa rem quia, ut atque earum eligendi nesciunt aliquam, deleniti esse corrupti corporis assumenda in animi. Dolorum laborum sapiente repudiandae tempora modi blanditiis.
                Voluptas accusantium velit sequi, commodi, numquam esse debitis necessitatibus, eligendi dolorem repellendus beatae quibusdam eos sapiente nisi error voluptatibus voluptates magni accusamus? Iure optio nesciunt officiis facilis eius at amet.
                Odio officia porro vitae omnis dolores deleniti ab distinctio optio culpa nisi natus fugiat, quos laborum, voluptatum magni? Repudiandae earum, eius nam et nesciunt aperiam enim quod necessitatibus quibusdam asperiores!
                Autem at necessitatibus iure nulla, sit unde sapiente molestiae. Repudiandae velit numquam assumenda aperiam. Ut facere blanditiis quae ipsa nisi deserunt harum laborum, perspiciatis sunt labore quo culpa, amet id.
                Ut expedita nisi nihil veritatis hic quasi reprehenderit qui accusamus quibusdam obcaecati sequi id veniam itaque voluptas facilis recusandae totam, aperiam et quod laborum iste. Rerum quod repudiandae accusantium dolorem.
                Eum, illo explicabo? Distinctio numquam fuga possimus illum sit praesentium atque vero nobis voluptatum consectetur natus voluptates, tenetur eligendi. Provident, corrupti. Pariatur dolorem error consequatur assumenda unde quam maiores nemo.
                Ad commodi earum, iste enim ipsum incidunt fugit vero laboriosam quod temporibus. Unde suscipit praesentium est laborum repellendus placeat mollitia, atque exercitationem dolore. Tempore modi iusto deleniti ipsa cum? Nulla?
                Consectetur voluptatum facilis debitis aut ab reiciendis impedit commodi iusto quam pariatur, libero inventore sunt unde amet porro saepe officiis reprehenderit, omnis provident nisi odio fuga non! Cupiditate, quasi laudantium?
                Provident repudiandae corrupti earum voluptatem explicabo quasi laudantium incidunt obcaecati, quos dolores optio aut distinctio expedita? Ipsam libero tempore quae facere deserunt deleniti nisi officiis nostrum, quod, maiores, enim esse?
                Obcaecati placeat cumque, cupiditate distinctio nisi ullam inventore aut reiciendis quo nostrum officia facilis doloribus molestias veritatis maiores amet dolore possimus assumenda aperiam aliquam quidem. Non vero esse soluta fugit.
                Quidem earum, eius ipsa officia eligendi aperiam cumque rem praesentium, quia error veniam dolore quis velit totam blanditiis repudiandae, voluptas eaque ex veritatis sequi esse corrupti excepturi a? Incidunt, blanditiis?
                Nulla, vel ad fugiat a aliquid sint explicabo facere distinctio recusandae assumenda porro, eligendi soluta corporis qui deleniti officiis quos nobis error vitae fugit eos? Reiciendis nemo architecto velit deleniti?
                Nisi modi et magnam, praesentium voluptas doloribus. Fugiat consequuntur aut eligendi cum tenetur provident, rerum exercitationem perferendis esse ab ipsam atque, praesentium, amet debitis. Nobis reiciendis quod deserunt ab vero?
                Quidem laboriosam, dolorem ab corporis dolores quae tempora temporibus? Ipsam sit ducimus nobis quaerat, sed quae pariatur maiores natus accusantium deleniti fugiat? Cum ab odio hic perspiciatis commodi non voluptates.
                Ad dolorum fugiat beatae animi rerum, facere totam sunt. Aspernatur nam eveniet ipsam dolorem omnis facere. Dolore voluptatem quidem autem culpa, incidunt corporis veritatis iusto quaerat dicta omnis enim temporibus.
                Aperiam ad expedita reiciendis temporibus facilis tempora sunt libero sapiente ipsa, laborum unde accusamus atque distinctio veniam inventore maiores. Aliquam eligendi enim explicabo esse nemo nesciunt nostrum unde veniam necessitatibus.
                Qui libero optio nesciunt corporis voluptatum asperiores labore nisi est, numquam sit molestias molestiae veritatis sequi quidem magnam illo accusamus sapiente, delectus voluptates, velit expedita quo. Placeat quam dignissimos veniam!
                Aperiam cumque dignissimos aut qui repellendus a accusantium in neque officiis, dicta hic recusandae ex, aliquam officia autem, alias laudantium blanditiis sint voluptate ea rem facere? Tenetur voluptates est quae.
                Officiis accusamus ducimus dolorem voluptatibus ipsa illum provident voluptates aliquam at vitae, quos molestiae quod odit sunt accusantium quisquam voluptate expedita maxime architecto cumque? Sit quas cum obcaecati perferendis consectetur!
                Possimus alias reiciendis voluptates quia totam dicta labore distinctio libero laudantium, beatae maxime, iure delectus consequuntur nihil sed? Ipsam sed animi sequi, minus porro provident culpa dignissimos magni ea ducimus?
                Necessitatibus, veritatis quam dolorem sapiente excepturi nulla maxime modi nihil velit vel consequatur quae at libero iste nostrum sequi enim qui ut ducimus neque voluptatibus. Molestias quos odio vero voluptatibus!
                Harum expedita tempora, distinctio nobis voluptatibus quaerat quo dignissimos, nemo, similique explicabo obcaecati magnam reprehenderit consectetur reiciendis ex ut. Vero quasi repudiandae optio tempora sapiente suscipit inventore maiores explicabo consectetur.
                Aliquam veniam reprehenderit consequuntur voluptatum itaque, laborum quae? Reprehenderit praesentium, animi vel ipsum labore aut nisi doloribus cupiditate id, adipisci aliquam, magnam expedita necessitatibus quasi odio illum accusamus fugit? Aliquid.
                Illo doloremque optio odio eius deleniti tempore soluta obcaecati fuga earum neque. Totam, rerum rem quia aut aspernatur et fugit exercitationem atque expedita odit, repellendus odio nulla ad vel optio.
                Omnis placeat iure quod ipsum, at laboriosam enim sed impedit earum perspiciatis, ipsam libero maxime! Alias, commodi molestiae dolor dolores debitis unde velit similique nobis illo totam distinctio ad odio?
                Cumque aspernatur voluptates qui molestiae itaque quasi rerum explicabo optio, ullam laborum. Voluptate quaerat tempore perspiciatis illo molestiae error voluptates odit reprehenderit ullam nihil modi pariatur, non aliquam quam ad.
                Repellendus quia provident sit ducimus fuga eveniet dignissimos cumque cum rem id officia, at inventore omnis beatae officiis neque nam quasi ad molestiae asperiores totam veritatis perferendis expedita eligendi. Sit!
                Corporis in rerum reiciendis laudantium, rem sint nam atque nisi corrupti expedita sequi possimus! Corporis unde maiores, quaerat culpa reiciendis nam placeat laborum in nesciunt distinctio eos dolorum amet eum.
                Quo quae, illo, corrupti quod velit commodi natus soluta inventore aspernatur error alias! Est inventore veritatis itaque sunt adipisci nemo deleniti sequi, laboriosam quisquam dolores harum magnam, pariatur id esse.
                Nemo molestiae, quas quia labore vel nobis mollitia hic quasi sint excepturi quaerat dolorum reiciendis eum ut! Nam distinctio vel odit vero id blanditiis necessitatibus et doloribus! Minus, quibusdam ducimus.
                Vero iusto impedit commodi non incidunt molestias, consequuntur fuga accusantium ducimus provident id doloribus voluptates autem ut obcaecati, dicta neque beatae rem eum placeat possimus itaque iste? Excepturi, non commodi.
                Deserunt dolorem fuga, iure iste, dolores nobis molestiae ipsa facere, labore ab sapiente. Laborum quisquam temporibus doloremque quaerat architecto tenetur quo? Velit mollitia obcaecati, ipsum debitis aperiam quam facere deserunt.
                Sequi error fugit magnam odit, id dolores, voluptatum debitis natus atque provident fugiat non expedita cupiditate alias. Neque veniam odit laboriosam aut quidem delectus aliquam iusto nihil mollitia? Sint, esse.
                Cumque ad hic at mollitia saepe, officia fugit recusandae accusantium libero labore adipisci quam inventore id tempore nesciunt excepturi cum officiis quidem similique tenetur eius facilis maiores atque praesentium! Exercitationem!
                Rem deleniti facilis dolores molestias maiores, sed praesentium porro temporibus molestiae beatae esse soluta libero quae laborum dignissimos qui! Voluptates esse vero aut facere omnis dolorum ex cumque? Eos, itaque.
                Necessitatibus assumenda, ipsa molestiae facilis maxime culpa sapiente reprehenderit unde impedit nulla minus recusandae, veniam nostrum reiciendis voluptatum quasi temporibus obcaecati deserunt consequatur architecto ratione quaerat. Soluta numquam laborum blanditiis!
                Vel excepturi vitae soluta suscipit rem eveniet aliquam! Quae, quaerat sint voluptatibus, quidem placeat ullam quis neque vero, asperiores ad esse enim eveniet facere vel! Iure at consectetur tenetur ab!
                Officia exercitationem ipsum obcaecati optio eveniet omnis mollitia veritatis tempora dolorum minus quae vel cupiditate facilis nam, totam rerum eligendi adipisci officiis quisquam culpa. Numquam iure deserunt placeat similique necessitatibus.
                Veniam laboriosam praesentium ducimus iure quo odio quaerat culpa dolorum alias, nam earum excepturi eligendi commodi inventore! Similique deleniti ad ducimus perferendis culpa odio voluptatum, nihil itaque! Impedit, sed asperiores?
                Reiciendis harum dolor nulla quaerat assumenda, quidem tempora quibusdam repellendus nostrum provident quas dolore quisquam, atque iusto impedit ut a officia? Ut quae voluptate odit sed perspiciatis libero eius minus!
                Labore, architecto explicabo pariatur nisi nulla sint aut autem adipisci nobis facere fugit molestiae dolorem voluptatem quam dolores rerum deleniti et saepe in ipsam rem animi asperiores modi quis. Maiores.
                Assumenda fugit rem sit eius possimus fuga temporibus neque ea porro natus libero cum esse culpa corrupti fugiat facere officia suscipit illo explicabo, nostrum odit provident velit dolore unde? Inventore?
                Quaerat veritatis officia repellat et alias a maxime id non quibusdam praesentium odio magnam consectetur, illum eos tempore nam sit ab quas minus facilis minima aspernatur, in exercitationem nihil! Ducimus.
                Delectus quibusdam officia, vero possimus quos nemo deleniti repellat sunt accusantium fuga ullam explicabo. Explicabo ratione tempore, harum quis qui culpa praesentium voluptatum veniam, perspiciatis quod eligendi esse dolorem adipisci!
                Soluta odio illo enim vero! Non est, porro repellat et eos neque, quis quaerat possimus enim, veniam velit reiciendis. Exercitationem accusantium totam veniam tempora distinctio delectus voluptates vel ipsam? Nemo?
                Est a, ratione facilis provident obcaecati, ipsa fugit eaque quibusdam sunt ducimus animi iure nesciunt vitae esse. Aspernatur rem temporibus, voluptatibus asperiores soluta nisi voluptate vel sed, fuga et labore.
                Porro qui officiis veritatis temporibus, consequuntur tempora! Facilis exercitationem quaerat obcaecati voluptate iure ab, deleniti ipsum? Temporibus, magnam placeat, repellendus omnis dolorem distinctio fuga sapiente tempora consequuntur earum cum corporis?
                Distinctio deserunt nesciunt rem, consectetur eveniet atque ipsam? Sed temporibus sit reiciendis doloribus veritatis quidem aliquid sint delectus laborum dolorem unde officia ea, vel porro facilis aspernatur error esse suscipit.
                Eum quaerat rerum repellendus esse distinctio, perspiciatis pariatur nostrum optio consectetur magnam iure id praesentium, incidunt exercitationem cum eligendi! Placeat eligendi eos laboriosam est, ipsa in? Molestiae neque consequatur a.
                Repellat sint magnam autem inventore esse dolorum optio itaque quam consequatur officia. Repellendus, cumque deleniti dolores a laborum incidunt ipsum. Ipsa, officiis dolorum quia fuga excepturi velit eos illo accusamus?
                Id maiores asperiores assumenda dolores, soluta dolore. Qui, accusantium repellendus veritatis in, ut optio saepe magni perferendis distinctio ea possimus ipsam maiores iste consequatur, assumenda recusandae exercitationem ducimus est reiciendis?
                Explicabo, ratione. Earum fugiat quisquam culpa reprehenderit error ex, at aliquid in explicabo, voluptatibus, voluptatem itaque ratione optio numquam amet cumque quo inventore corrupti sunt recusandae aperiam cum possimus id!
                Ad officiis reiciendis quidem nisi, sit laborum ullam incidunt perferendis beatae consectetur quos asperiores? Accusantium earum obcaecati dignissimos officia aspernatur similique. Sit ex id nam totam et maxime aperiam harum?
                Quia debitis ducimus architecto? Saepe nam accusantium veniam architecto ea amet! Reprehenderit illum alias magnam deserunt veniam beatae harum nisi nemo aut. Totam voluptates voluptate consequuntur quibusdam assumenda, minima obcaecati.
                Obcaecati molestiae, voluptates animi consequatur suscipit quae repudiandae! Blanditiis molestias, commodi, quis ullam reprehenderit est repellat ut, voluptatibus aut dolore at sequi accusamus. Vitae, quaerat tenetur deserunt assumenda perspiciatis accusantium!
                Odit iure labore impedit, deleniti repellat, consequuntur rerum iste temporibus alias, repudiandae nam corporis voluptate commodi. Ad, aperiam harum provident quo animi sequi, illum autem quaerat tempora iusto accusamus architecto!
                Et, tempore quam iste quo fugiat amet. Nobis, rerum deleniti delectus exercitationem, error reprehenderit nisi dicta quisquam fugit reiciendis harum velit quam iure voluptas impedit expedita mollitia atque minima praesentium.
                Recusandae quas totam facilis in nobis cum sequi illum sapiente alias nulla veritatis, quisquam consectetur. Voluptatibus placeat sit mollitia fugit doloribus aperiam eius cum molestias. Officiis aperiam amet dicta aliquid.
                Blanditiis at odio modi maxime odit consequatur architecto molestiae error tempore velit temporibus alias expedita libero quas magnam, saepe, non eaque corrupti aspernatur, incidunt explicabo quaerat enim qui. Possimus, similique!
                Tempora molestias, quam voluptate ipsa labore aperiam quae quas necessitatibus alias et? Cum vitae quidem quia quod, ipsa alias eligendi id sunt sed quas cupiditate doloribus assumenda ad ea aut.
                Similique suscipit eaque eos, sequi labore facere beatae! Impedit, praesentium? A incidunt vitae quae perspiciatis sapiente dicta adipisci sint impedit accusamus commodi sunt hic, doloremque, nam rem recusandae delectus eligendi?
                Aliquid architecto dolore pariatur incidunt ipsam doloribus cum aut et nobis explicabo ratione, amet consectetur deleniti veritatis, eveniet qui velit id voluptates nemo? Necessitatibus ut impedit iste, odio perferendis vitae!
                Officia sit vel alias accusantium impedit odio in amet beatae, nemo tempora. Distinctio, magni magnam! Dicta ullam veniam voluptate tempore reprehenderit porro maiores, vitae perspiciatis maxime vero in itaque magni.
                Quas dignissimos facilis libero aut eaque optio accusantium nam exercitationem veritatis fuga incidunt ex beatae, rem nisi reprehenderit quos nesciunt nostrum ullam tempora atque fugit? Repudiandae alias delectus tempore dolor.
                Nulla asperiores iure voluptatem. Unde impedit, corrupti est nisi officiis doloribus dicta voluptatum placeat. Tempore non, a dolores dignissimos at iusto necessitatibus expedita, facere saepe nostrum autem magnam vitae ratione!
            </div>
    )
}