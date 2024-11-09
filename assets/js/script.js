const propiedadesVentas = [
    {
        nombre: 'Apartamento de lujo en zona exclusiva',
        src: 'https://www.relatedrentals.com/sites/default/files/2022-08/EXT-IMG-1.jpg',
        descripcion: 'Este apartamento de lujo está ubicado en una exclusiva zona residencial',
        ubicacion: '1448 Roselyn Estates, Lavinaside',
        habitaciones: 6,
        baños: 4,
        costo: 5000,
        smoke: true,
        pets: false
    },
    {
        nombre: 'Apartamento en zona Empresarial',
        src: 'https://images1.apartments.com/i2/2-xypz-_A_cuLCERn2IuFS8Lumr1roXKHcLMHQ_SU4s/111/unfurnished-1-bedroom-new-york-ny-primary-photo.jpg',
        descripcion: 'Este apartamento acogedor está situado en la mejor zona empresarial de la ciudad',
        ubicacion: '1789 Mountain Road, Summit Peaks, CA 23456',
        habitaciones: 2,
        baños: 1,
        costo: 1200,
        smoke: true,
        pets: true
    },
    {
        nombre: 'Penthouse de lujo con terraza panorámica',
        src: 'https://resizer.glanacion.com/resizer/fhK-tSVag_8UGJjPMgWrspslPoU=/768x0/filters:quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/CUXVMXQE4JD5XIXX4X3PDZAVMY.jpg',
        descripcion: 'Este penthouse de lujo ofrece una terraza panorámica con vistas espectaculares',
        ubicacion: '567 Skyline Avenue, Skyview City, CA 56789',
        habitaciones: 3,
        baños: 3,
        costo: 4500,
        smoke: false,
        pets: true
    },
    {
        nombre: 'Lujosa casa en cerca de la naturaleza',
        src: 'https://www.laconservancy.org/wp-content/uploads/2022/10/JapaneseHouse_KellySutherlinMcLeodArchitectureInc.jpg',
        descripcion: 'Tranquilidad y confort, ubicada en una gran zona rural',
        ubicacion: '4499 Norberto Drive, Monahanfort, Oklahoma',
        habitaciones: 8,
        baños: 4,
        costo: 8570,
        smoke: false,
        pets: false
    }
];

const propiedadesAlquiler = [
    {
        nombre: 'Resort lujoso para tus vaciones',
        src: 'https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        descripcion: 'Lujoso resort con todo incluido para que disfrutes al maximo.',
        ubicacion: '997 Darrion Walk, Port Jeanneville, Arizona',
        habitaciones: 1,
        baños: 2,
        costo: 6000,
        smoke: false,
        pets: false
    },
    {
        nombre: 'Cabaña en la nieve',
        src: 'https://images.pexels.com/photos/28179112/pexels-photo-28179112/free-photo-of-a-ski-resort-with-snow-covered-mountains-and-houses.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        descripcion: 'Amplio apartamente y confortable, para disfrutar climas frios',
        ubicacion: '99296 Hamill Stravenue, Metzview, New York',
        habitaciones: 4,
        baños: 2,
        costo: 2400,
        smoke: false,
        pets: true
    },
    {
        nombre: 'Comodo apartamento en zona fluvial',
        src: 'https://images.pexels.com/photos/18293709/pexels-photo-18293709/free-photo-of-gondolas-on-canal-in-venice.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        descripcion: 'Zona preferida por turista por su comodidad y excelente ubicacion.',
        ubicacion: '99296 Hamill Stravenue, Metzview, New York',
        habitaciones: 3,
        baños: 1,
        costo: 3300,
        smoke: true,
        pets: false
    },
    {
        nombre: 'Apartamento apmplio residencial',
        src: 'https://images.pexels.com/photos/11986100/pexels-photo-11986100.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        descripcion: 'Cerca de parques y zonas verdes para disfrutar.',
        ubicacion: '7616 Mattie Keys, Kirlinland, Minnesota',
        habitaciones: 4,
        baños: 3,
        costo: 1800,
        smoke: true,
        pets: true
    },
];

const sectionVenta = document.querySelector('.venta-div');
const sectionAlquiler = document.querySelector('.alquiler-div')
let htmlVenta =''
let htmlAlquiler =''

const renderCards = (propierties, html) => {
        for(let propiertie of propierties) {
            html += `
            <div class="col-md-4 mb-4">            
                <div class="card">
                    <img
                        src=${propiertie.src}
                        class="card-img-top"
                        alt="Imagen del departamento"
                    />
                    <div class="card-body">
                        <h5 class="card-title">
                            ${propiertie.nombre}
                        </h5>
                        <p class="card-text">
                            ${propiertie.descripcion}
                        </p>
                        <p>
                        <i class="fas fa-map-marker-alt"></i>
                            ${propiertie.ubicacion}
                        </p>
                        <p>
                        <i class="fas fa-bed"></i> ${propiertie.habitaciones} Habitaciones |
                        <i class="fas fa-bath"></i> ${propiertie.baños} Baños
                        </p>
                        <p><i class="fas fa-dollar-sign"></i> ${propiertie.costo}</p>
                        ${propiertie.smoke?
                            '<p class="text-success"><i class="fas fa-smoking"></i> Permitido fumar</p>'
                            :'<p class="text-danger"><i class="fas fa-smoking-ban"></i> No se permite fumar</p>'
                        }
                        ${propiertie.pets?
                            '<p class="text-success"><i class="fas fa-paw"></i> Mascotas permitidas</p>'
                            :'<p class="text-danger"><i class="fa-solid fa-ban"></i> No se permiten mascotas</p>'
                        }
                        </div>
                    </div>
                </div>`
        }
    return html
};

let cardsVenta = renderCards(propiedadesVentas, htmlVenta)
let cardsAlquiler = renderCards(propiedadesAlquiler, htmlAlquiler)

sectionVenta? sectionVenta.innerHTML = cardsVenta : '';
sectionAlquiler? sectionAlquiler.innerHTML = cardsAlquiler : '';