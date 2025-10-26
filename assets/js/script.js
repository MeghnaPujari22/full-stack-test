$(document).ready(function() {
    loadSections();

    function loadSections() {
        $.post('crud.php', { action: 'fetch' }, function(data) {
            let sections = JSON.parse(data);
            let tabHTML = '';
            let sliderHTML = '';
            let accordionHTML = '';
            let firstImage = '';
            let firstTitle = '';
            let firstSubtitle = '';

            sections.forEach((sec, index) => {
                let activeClass = index === 0 ? 'active' : '';
                let expandedClass = index === 0 ? 'show' : '';
                
                // Tabs for desktop
                tabHTML += `
                    <a href="#" class="list-group-item list-group-item-action text-muted ${activeClass}" data-index="${index}">
                        <img src="${sec.SectionsIcon}" alt="" class="me-2" aria-hidden="true" />
                        ${sec.TitleName}
                    </a>`;

                // Slider content
                sliderHTML += `
                    <div class="carousel-item ${activeClass}" data-img="${sec.ImageUrl}" data-title="${sec.TitleName}" data-subtitle="${sec.SubtitleName || ''}">
                        <div class="container">
                            <h4>${sec.TitleName}</h4>
                            ${sec.SubtitleName ? `<h6>${sec.SubtitleName}</h6>` : ''}
                            <p>${sec.Description || ''}</p>
                            <div class="mt-4">
                                <button class="btn btn-outline-light" onclick="showLearnMore('${sec.TitleName}')">
                                    Learn More <i class="fas fa-arrow-right ms-2"></i>
                                </button>
                            </div>
                        </div>
                    </div>`;

                // Accordion for mobile
                accordionHTML += `
                    <div class="accordion-item">
                        <h2 class="accordion-header" id="heading${index}">
                            <div class="accordion-title d-flex justify-content-between align-items-center" 
                                data-bs-toggle="collapse" 
                                data-bs-target="#collapse${index}" 
                                aria-expanded="${index === 0 ? 'true' : 'false'}" 
                                aria-controls="collapse${index}" 
                                data-index="${index}"
                                style="cursor: pointer;">
                                <div>
                                    <img src="${sec.SectionsIcon}" alt="" class="me-2" aria-hidden="true" />
                                    <span>${sec.TitleName}</span>
                                </div>
                                <div>
                                    <img src="files/images/minus-01.svg" alt="minus icon" class="icon-minus" style="${index === 0 ? '' : 'display:none;'}" />
                                    <img src="files/images/plus-01.svg" alt="plus icon" class="icon-plus" style="${index === 0 ? 'display:none;' : ''}" />
                                </div>
                            </div>
                        </h2>

                        <div id="collapse${index}" class="accordion-collapse collapse ${expandedClass}" data-bs-parent="#sectionAccordion">
                            <div class="accordion-body">
                                ${sec.SubtitleName ? `<h6 class="text-accent">${sec.SubtitleName}</h6>` : ''}
                                <p>${sec.Description || ''}</p>
                                <button class="text-white btn btn-sm learn-more-btn" data-index="${index}">
                                    Learn More <img src="files/images/arrow-right.svg" alt="arrow icon" class="ms-1 text-white" />
                                </button>
                            </div>
                        </div>
                    </div>`;

                if (index === 0) {
                    firstImage = sec.ImageUrl;
                    firstTitle = sec.TitleName;
                    firstSubtitle = sec.SubtitleName || '';
                }
            });

            $('#sectionTabs').html(tabHTML);
            $('#sliderContent').html(sliderHTML);
            $('#sectionAccordion').html(accordionHTML);

            // Initial preview
            $('#imagePreview').attr('src', firstImage);
            $('#previewTitle').text(firstTitle);
            $('#previewSubtitle').text(firstSubtitle);

            // Carousel events
            $('#sliderArea').on('slide.bs.carousel', function(e) {
                let activeSlide = $(e.relatedTarget);
                let index = activeSlide.index();
                let img = activeSlide.data('img');
                let title = activeSlide.data('title');
                let subtitle = activeSlide.data('subtitle');

                $('#imagePreview').attr('src', img);
                $('#previewTitle').text(title);
                $('#previewSubtitle').text(subtitle);

                $('#sectionTabs .list-group-item').removeClass('active');
                $(`#sectionTabs .list-group-item[data-index="${index}"]`).addClass('active');
            });

            // Tab click
            $('#sectionTabs .list-group-item').on('click', function(e) {
                e.preventDefault();
                let index = $(this).data('index');
                $('#sliderArea').carousel(index);
            });

            // Accordion title click to switch slide
            $('#sectionAccordion .accordion-title').on('click', function() {
                let index = $(this).data('index');
                $('#sliderArea').carousel(index);
            });

            // Accordion Learn More button
            $('#sectionAccordion .learn-more-btn').on('click', function() {
                let index = $(this).data('index');
                let slideData = $(`#sliderContent .carousel-item`).eq(index).data();
                $('#imagePreview').attr('src', slideData.img);
                $('#previewTitle').text(slideData.title);
                $('#previewSubtitle').text(slideData.subtitle);
                showLearnMore(slideData.title);
            });

            // Icon toggle handled by Bootstrap collapse events
            $('#sectionAccordion .accordion-collapse').on('show.bs.collapse', function () {
                let header = $(this).prev('.accordion-header');
                header.find('.icon-plus').hide();
                header.find('.icon-minus').show();
            });
            /*$('#sectionAccordion .accordion-collapse').on('hide.bs.collapse', function () {
                let header = $(this).prev('.accordion-header');
                header.find('.icon-minus').hide();
                header.find('.icon-plus').show();
            });*/
        });
    }

    // Auto-rotate carousel
    setInterval(() => {
        $('#sliderArea').carousel('next');
    }, 5000);
});

// Global Learn More
function showLearnMore(title) {
    alert(`Learn more about: ${title}`);
}
