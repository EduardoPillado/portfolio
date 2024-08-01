<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <!-- Iconos -->
    <link href='https://unpkg.com/boxicons@2.0.7/css/boxicons.min.css' rel='stylesheet'>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.5/font/bootstrap-icons.css">
    <!-- CSS -->
    <link rel="stylesheet" href="css/estilo.css?=29">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>
    <!-- SweetAlert2 -->
    <script src="https://cdn.jsdelivr.net/npm/sweetalert2@11"></script>
</head>
<body>

    <nav>
        <ul>
            <li>
                <a href="#inicio">
                    <i class='bx bxs-home'></i>
                    <span class="tooltip">INICIO</span>
                </a>
            </li>
            <li>
                <a href="#contacto">
                    <i class='bx bxs-contact' ></i>
                    <span class="tooltip">CONTACTO</span>
                </a>
            </li>
            <li>
                <a href="#sobre_mi">
                    <i class='bx bxs-smile'></i>
                    <span class="tooltip">SOBRE MI</span>
                </a>
            </li>
            <li>
                <a href="#conocimientos">
                    <i class="bi bi-lightbulb-fill"></i>
                    <span class="tooltip">CONOCIMIENTOS</span>
                </a>
            </li>
            <li>
                <a href="#perfil_academico">
                    <i class="bi bi-file-earmark-person"></i>
                    <span class="tooltip">PERFIL ACADÉMICO</span>
                </a>
            </li>
            <li>
                <a href="#proyectos">
                    <i class='bx bxs-folder'></i>
                    <span class="tooltip">PROYECTOS</span>
                </a>
            </li>
            <li>
                <a href="#google_translate_element">
                    <i class="bi bi-globe"></i>
                    <span class="tooltip">IDIOMA</span>
                </a>
            </li>
        </ul>
    </nav>

    <script>
        window.addEventListener('scroll', function() {
            const nav = document.querySelector('nav');
            
            if (window.scrollY > 50) {
                nav.classList.add('scrolled');
            } else {
                nav.classList.remove('scrolled');
            }
        });
    </script>
    
</body>
</html>