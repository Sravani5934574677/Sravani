// sidebar.js - Dynamic Sidebar Generator

document.addEventListener('DOMContentLoaded', function() {
    // Create sidebar container
    const sidebarLarge = document.createElement('nav');
    sidebarLarge.className = 'col-md-3 col-lg-2 d-none d-lg-block sidebar';
    sidebarLarge.id = 'sidebar-large';
    
    // Sidebar content
    sidebarLarge.innerHTML = `
        <h3 class="font-weight-bold text-white">Quick Links</h3><br>
        <a href="about_college.html">About US</a>
        <a href="e_p.html">Educational Programs</a>
        <a href="ad.html">Admission Details</a>
        <a href="fac.html">Facilities</a>
        <a href="extra_a.html">Extracurricular Activities</a>            
        <a href="testimonials_a.html">Student Testimonials</a>
    `;
    
    // Create mobile header with toggle button
    const mobileHeader = document.createElement('header');
    mobileHeader.className = 'bg-header container d-block d-lg-none pb-5 pt-5';
    mobileHeader.style.position = 'relative';
    mobileHeader.innerHTML = `
        <button class="sidebar-toggle-btn-small bg-header container p-0 py-0" id="sidebarToggleBtnSmall" 
                style="position:  absolute; font-size:16px; top: 50%; left: 50%; transform: translate(-50%, -50%); color: white;">
            &#9776; Open Sidebar
        </button>
    `;
    
    // Create mobile sidebar
    const sidebarSmall = document.createElement('nav');
    sidebarSmall.className = 'sidebar-small-devices';
    sidebarSmall.id = 'sidebarSmallDevices';
    sidebarSmall.style.marginTop = '220px';
    sidebarSmall.innerHTML = `
        <br>
        <div class="nav-links-container-small">
            <h3 class="font-weight-bold">Quick Links</h3><br>
            <a href="about_college.html">About US</a>
            <a href="e_p.html">Educational Programs</a>
            <a href="ad.html">Admission Details</a>
            <a href="fac.html">Facilities</a>
            <a href="extra_a.html">Extracurricular Activities</a>            
            <a href="testimonials_a.html">Student Testimonials</a>
        </div>
    `;
    
    // Insert elements into the DOM
    const container = document.querySelector('.container-fluid .row');
    if (container) {
        container.insertBefore(sidebarLarge, container.firstChild);
        container.insertBefore(mobileHeader, container.children[1]);
        document.body.appendChild(sidebarSmall);
    }
    
    // Add styles dynamically
    const style = document.createElement('style');
    style.textContent = `
        .sidebar {
            height: 100vh;
            background-color: #f8f9fa;
            padding: 20px;
        }
        .sidebar a {
            display: block;
            padding: 10px;
            color: #333;
            text-decoration: none;
        }
        .sidebar a:hover {
            background-color: #007bff;
            color: white;
        }
        .contentss {
            padding: 20px;
        }
        
     
        
        /* Sidebar styles for small devices */
        .sidebar-small-devices {
            width: 250px;
            height: 100vh;
            position: fixed;
            top: 0;
            left: -250px;
            background-color: white;
            transition: left 0.3s ease;
            z-index: 1000;
        }
        
        .sidebar-small-devices.open {
            left: 0;
        }
        
        .sidebar-toggle-btn-small {
            background-color: blue;
            
            border: none;
             border-radius: none;
            font-size: 26px;
            
            cursor: pointer;
            
            right: -50px;
            top: 10px;
        }
        
        .nav-links-container-small {
            padding: 20px;
        }
        
        .sidebar-heading-small {
            margin-bottom: 15px;
            font-weight: bold;
        }
        
        .nav-links-container-small a {
            display: block;
            padding: 10px 0;
            color: #333;
            text-decoration: none;
        }
        
        .nav-links-container-small a:hover {
            background-color: #06038D;
            color:white;
        }
         
        h2 {
            font-weight: bold;
            color: #333;
            font-size: 2.5rem;
            position: relative;
            letter-spacing: 2px;
            margin-bottom: 20px;
        }
        h2::after {
            content: '';
            width: 100px;
            height: 5px;
            background-color: #007bff;
            position: absolute;
            left: 0;
            bottom: 0;
        }
        p {
            font-size: 1.1rem;
            color: #666;
            line-height: 1.8;
        }
        
        /* Enhanced Sidebar Styling */
        .sidebar {
            height: 100vh;
            background: linear-gradient(135deg, #007bff, #6a11cb);
            padding: 30px;
            color: white;
            position: sticky;
            top: 0;
            box-shadow: 3px 0 10px rgba(0, 0, 0, 0.2);
        }
        .sidebar h3 {
            font-size: 1.5rem;
            text-align: center;
            font-weight: bold;
            color: white;
            letter-spacing: 1px;
            margin-bottom: 30px;
        }
        .sidebar a {
            display: block;
            padding: 12px 15px;
            margin: 10px 0;
            background-color: transparent;
            color: white;
            font-weight: 600;
            text-decoration: none;
            border-radius: 5px;
            letter-spacing: 1px;
            transition: all 0.3s ease;
        }
        .sidebar a:hover {
            background-color: white;
            color: white!important;
            box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
            transform: translateX(10px);
        }
        
        /* Header styling */
        .bg-header {
        
            padding:none!important;
            border-radius: 0 0 20px 20px;
            text-align: center!important;
        }
        
        /* Alternate color scheme */
        .sidebar {
            background: #06038D!important;
        } 
        .sidebar a:hover {
            background-color: blue;
            color: #007bff;
        }
        
        .contents {
            padding: 25px;
            background-color: white;
            box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
            border-radius: 10px;
        }
            /* Mobile Sidebar Styles */
.sidebar-small-devices {
    width: 250px;
    height: 100vh;
    position: fixed;
    top: 0;
    left: -250px; /* Hidden by default */
    background: linear-gradient(135deg, #06038D, #2b4cb2);
    color: white;
    transition: left 0.3s ease;
    box-shadow: 5px 0 15px rgba(0, 0, 0, 0.2);
    z-index: 1050;
    overflow-y: auto;
    border-top-right-radius: 15px;
    border-bottom-right-radius: 15px;
}

/* When Sidebar is Open */
.sidebar-small-devices.open {
    left: 0;
}

/* Toggle Button Style */
.sidebar-toggle-btn-small {
    background-color: #06038D;
    color: #fff;
    font-size: 16px;
    padding: 8px!important;
    
    border-radius: 8px;
    border: none;
    border-radius: 8px;

    cursor: pointer;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2); 
}

.sidebar-toggle-btn-small:hover {
    background-color: #002f9c;
    transform: scale(1.05);
}

/* Links inside Sidebar */
.nav-links-container-small {
    padding: 20px;
    
}

.nav-links-container-small h3 {
    font-size: 1.3rem;
    color: #fff;
    margin-bottom: 20px;
    text-align: center;
    border-bottom: 2px solid rgba(255, 255, 255, 0.3);
    padding-bottom: 10px;
}

.nav-links-container-small a {
    display: block;
    padding: 10px 15px;
    margin-bottom: 8px;
    font-weight: 500;
    color: white;
    text-decoration: none;
    border-radius: 6px; 
}

.nav-links-container-small a:hover {
    background-color: rgba(255, 255, 255, 0.2);
    padding-left: 20px;
    color: #fff;
}

    `;
    
    document.head.appendChild(style);
    
    // Toggle functionality for mobile sidebar
    document.getElementById('sidebarToggleBtnSmall').addEventListener('click', function() {
        const sidebar = document.getElementById('sidebarSmallDevices');
        sidebar.classList.toggle('open');
        
        if (sidebar.classList.contains('open')) {
            this.innerHTML = '&#9776; Close Sidebar';
        } else {
            this.innerHTML = '&#9776; Open Sidebar';
        }
    });
});