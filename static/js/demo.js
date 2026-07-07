// static/js/demo.js
class DeepShieldDemo {
    constructor() {
        this.initializeElements();
        this.bindEvents();
    }

    initializeElements() {
        // Get all DOM elements
        this.uploadButton = document.getElementById('uploadButton');
        this.videoFileInput = document.getElementById('videoFile');
        this.uploadArea = document.getElementById('uploadArea');
        this.uploadProgress = document.getElementById('uploadProgress');
        this.progressFill = document.getElementById('progressFill');
        this.progressText = document.getElementById('progressText');
        this.analysisSection = document.getElementById('analysisSection');
        this.analysisProgressFill = document.getElementById('analysisProgressFill');
        this.analysisStatus = document.getElementById('analysisStatus');
        this.resultsSection = document.getElementById('resultsSection');
        
        // Steps
        this.step1 = document.getElementById('step1');
        this.step2 = document.getElementById('step2');
        this.step3 = document.getElementById('step3');
        
        // Results
        this.verdictBadge = document.getElementById('verdictBadge');
        this.verdictText = document.getElementById('verdictText');
        this.confidenceFill = document.getElementById('confidenceFill');
        this.confidenceValue = document.getElementById('confidenceValue');
        this.claheValue = document.getElementById('claheValue');
        this.edgeValue = document.getElementById('edgeValue');
        this.fftValue = document.getElementById('fftValue');
        this.claheVerdict = document.getElementById('claheVerdict');
        this.edgeVerdict = document.getElementById('edgeVerdict');
        this.fftVerdict = document.getElementById('fftVerdict');
        this.processingTime = document.getElementById('processingTime');
        this.sequencesAnalyzed = document.getElementById('sequencesAnalyzed');
        this.fusionScore = document.getElementById('fusionScore');
        
        // Buttons
        this.analyzeAnotherBtn = document.getElementById('analyzeAnother');
        this.downloadReportBtn = document.getElementById('downloadReport');
    }

    bindEvents() {
        this.uploadButton.addEventListener('click', () => this.videoFileInput.click());
        this.videoFileInput.addEventListener('change', (e) => this.handleFileSelect(e));
        
        // Drag and drop
        this.uploadArea.addEventListener('dragover', (e) => this.handleDragOver(e));
        this.uploadArea.addEventListener('dragleave', (e) => this.handleDragLeave(e));
        this.uploadArea.addEventListener('drop', (e) => this.handleDrop(e));
        
        // Buttons
        this.analyzeAnotherBtn.addEventListener('click', () => this.resetUploadSection());
        this.downloadReportBtn.addEventListener('click', () => this.downloadReport());
    }

    handleFileSelect(e) {
        if (e.target.files.length > 0) {
            this.handleFileUpload(e.target.files[0]);
        }
    }

    handleDragOver(e) {
        e.preventDefault();
        this.uploadArea.style.borderColor = '#2563eb';
        this.uploadArea.style.backgroundColor = '#f8fafc';
    }

    handleDragLeave(e) {
        e.preventDefault();
        this.uploadArea.style.borderColor = '#94a3b8';
        this.uploadArea.style.backgroundColor = 'white';
    }

    handleDrop(e) {
        e.preventDefault();
        this.uploadArea.style.borderColor = '#94a3b8';
        this.uploadArea.style.backgroundColor = 'white';
        
        const files = e.dataTransfer.files;
        if (files.length > 0) {
            this.handleFileUpload(files[0]);
        }
    }

    // ... include all the other methods from the inline script above
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new DeepShieldDemo();
});