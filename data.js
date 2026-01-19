const portfolioData = {
    "nav": {
        "logo": "LUQFI",
        "accent": "ANITA",
        "btn": "Hire Me"
    },
    "hero": {
        "badge": "Data Analytics & Machine Learning",
        "title1": "Transforming Data into",
        "title2": "Strategic Business Growth",
        "desc": "Hi, I’m <strong>Luqfi Anita Rahman</strong>, a Data Analyst driven by a curiosity to uncover the 'why' behind the numbers.<br><br>My journey into the world of data began with an intensive 45-day program at PPKD South Jakarta, where I honed my technical skills and developed a business-first mindset. I focus on bridging the gap between complex analytics and strategic growth.",
        "btn1": "Explore Case Studies",
        "btn2": "My Tech Stack",
        "repo": "https://github.com/BOSEIT/Portofolio.git"
    },
    "contact": {
        "wa": "https://wa.me/6285183092062",
        "email": "luqfianita8317@gmail.com"
    },
    "stats": [
        {
            "val": "30+",
            "label": "Deep-Dive Case Studies"
        },
        {
            "val": "149k+",
            "label": "Transaction Rows Analyzed"
        },
        {
            "val": "SQL/Python",
            "label": "Technical Stack"
        },
        {
            "val": "98%",
            "label": "Model Accuracy Achieved"
        }
    ],
    "dashboard": [
        {
            "url": "https://drive.google.com/uc?export=view&id=1dh5cI8anmTK-PRuU5t_IsPgDDue69ohj",
            "caption": "Executive Summary Dashboard"
        },
        {
            "url": "https://images.unsplash.com/photo-1543286386-2e659306cd6c?q=80&w=1000&auto=format&fit=crop",
            "caption": "SQL Query Optimization Cert"
        },
        {
            "url": "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?q=80&w=1000&auto=format&fit=crop",
            "caption": "Python Bootcamp Certificate"
        },
        {
            "url": "https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=1000&auto=format&fit=crop",
            "caption": "Data Visualization Workshop"
        }
    ],
    "approach": {
        "title": "My Technical Toolkit",
        "desc": "I don’t just build models; I provide solutions. Every project I undertake culminates in actionable business recommendations aimed at optimizing operations, increasing revenue, and solving real-world challenges.",
        "cards": [
            {
                "icon": "brain-circuit",
                "title": "Machine Learning & Advanced Analytics",
                "desc": "Hands-on experience implementing diverse algorithms, including Random Forest (98% acc), Classification for risk modeling, and Regression for price forecasting."
            },
            {
                "icon": "message-square-text",
                "title": "Natural Language Processing (NLP)",
                "desc": "Specializing in extracting meaning from unstructured text, particularly through Sentiment Analysis to understand customer behavior and public perception on Social Media."
            },
            {
                "icon": "bar-chart-3",
                "title": "Data Visualization & Dashboards",
                "desc": "Translating complex datasets into intuitive stories. My portfolio includes Sales Performance Dashboards and Tax Compliance monitoring to identify growth opportunities."
            },
            {
                "icon": "database",
                "title": "Advanced SQL & Web Scraping",
                "desc": "Strong command of SQL for data retrieval and Python Web Scraping to gather external market intelligence (competitor pricing, etc)."
            }
        ]
    },
    "tools": [
        {
            "name": "SQL (PostgreSQL)",
            "icon": "database"
        },
        {
            "name": "Python",
            "icon": "code-2"
        },
        {
            "name": "Power BI",
            "icon": "bar-chart-4"
        },
        {
            "name": "Excel (Pivot/VBA)",
            "icon": "table"
        },
        {
            "name": "Scikit-Learn",
            "icon": "brain"
        },
        {
            "name": "Web Scraping",
            "icon": "globe"
        },
        {
            "name": "Pandas & NumPy",
            "icon": "file-json"
        }
    ],
    "projects": [
        {
            "id": 11,
            "title": "Minimarket Sales & Profitability",
            "subtitle": "Power BI • Business Intelligence • Sales Report",
            "desc": "Comprehensive 2024 Sales Performance & Profitability Analysis for Minimarket Operations.",
            "tech": "Power BI, Data Visualization, Data Analysis",
            "img": "https://images.unsplash.com/photo-1591696205602-2f950c417cb9?q=80&w=1000&auto=format&fit=crop",
            "challenge": "The minimarket required a holistic view of its 2024 performance, including identifying top revenue drivers, margin leaks, and optimal operating hours.",
            "solution": "Developed a comprehensive Power BI Report covering: Background & Problem Statement, Objectives, Data Sources, and Analysis Methods. Implemented detailed visualizations for Key Findings.",
            "result": "Key Findings included identification of Best-Selling Products, Highest Revenue/Margin Categories, Peak Transaction Hours, and Payment Method Distribution. Delivered Strategic Business Recommendations for Products, Operations, Payments, and Branch Management."
        },
        {
            "id": 1,
            "title": "Coffee Shop Sales Optimization",
            "subtitle": "SQL • Operational Analytics • 149k Rows",
            "desc": "Comprehensive analysis of 149,116 transaction records to solve operational bottlenecks and revenue dips.",
            "tech": "SQL (PostgreSQL), Data Modeling, Window Functions",
            "img": "https://images.unsplash.com/photo-1497935586351-b67a49e012bf?q=80&w=1000&auto=format&fit=crop",
            "challenge": "The business faced unidentified revenue drops on weekends and lacked visibility into 'Rush Hours' for efficient staff scheduling. Inventory management for top-selling items was reactive rather than proactive.",
            "solution": "Performed rigorous SQL analysis using Aggregate Functions to map hourly transaction volumes and Product Affinity. Validated data integrity (zero NULLs on IDs) before processing.",
            "result": "Identified 10:00 AM as the absolute Peak Hour and 'Earl Grey Rg' as the #1 volume seller (4,708 units). Recommended a 'Weekend Bundling' strategy to boost Saturday traffic (the lowest day) and mandated a safety-stock policy for Coffee (> $269k Revenue contribution)."
        },
        {
            "id": 2,
            "title": "Bali Hotel Price Intelligence",
            "subtitle": "Python • Web Scraping • Market Analysis",
            "desc": "Automated market intelligence tool predicting hotel pricing trends in Bali to aid in competitive strategy.",
            "tech": "Python, Web Scraping, Random Forest Regressor",
            "img": "https://images.unsplash.com/photo-1537996194471-e657df975ab4?q=80&w=1000&auto=format&fit=crop",
            "challenge": "Hotel owners and travel agencies struggled to set competitive pricing due to fluctuating market demand and lack of real-time competitor data.",
            "solution": "Developed a scraping pipeline to harvest real-time hotel data. Implemented a Random Forest Regressor model to identify key price drivers (location, amenities, ratings).",
            "result": "Built a robust pricing model with high predictive accuracy, enabling stakeholders to adjust rates dynamically based on market positioning rather than guesswork."
        },
        {
            "id": 3,
            "title": "Clinical Decision Support System",
            "subtitle": "Healthcare • Random Forest • 98% Accuracy",
            "desc": "Machine learning model designed to assist medical professionals in early screening of Chronic Kidney Disease (CKD).",
            "tech": "Python, Random Forest Classifier, Pandas",
            "img": "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=1000&auto=format&fit=crop",
            "challenge": "Early detection of Chronic Kidney Disease is critical but often delayed due to manual screening processes and subtle early symptoms.",
            "solution": "Engineered a Random Forest classification model trained on patient bio-markers. Focused on minimizing False Negatives to ensure no high-risk patient is overlooked.",
            "result": "Achieved a 98% diagnostic accuracy rate. This tool serves as a reliable 'second opinion' system, potentially reducing diagnosis time and healthcare costs."
        },
        {
            "id": 4,
            "title": "YouTube Sentiment Analysis",
            "subtitle": "NLP • Brand Reputation • Naïve Bayes",
            "desc": "Analyzing public opinion and viewer sentiment from YouTube comment sections to guide content strategy.",
            "tech": "Python, Naïve Bayes, NLTK (Tokenization/Stopwords)",
            "img": "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=1000&auto=format&fit=crop",
            "challenge": "Brands often struggle to manually process thousands of user comments to gauge the true reception of their content or products.",
            "solution": "Built an NLP pipeline performing Text Preprocessing (cleaning, stemming) and applied Naïve Bayes to classify sentiments (Positive/Negative/Neutral).",
            "result": "Provided clear metrics on audience engagement, helping content creators identify which topics resonate most positively with their demographic."
        },
        {
            "id": 5,
            "title": "Loan Eligibility Risk Model",
            "subtitle": "Fintech • Risk Management • Decision Tree",
            "desc": "Predictive model to automate loan approval processes and reduce default risk for financial institutions.",
            "tech": "Python, Decision Tree Classifier, Scikit-Learn",
            "img": "https://images.unsplash.com/photo-1554224155-9ffd4d2fb30c?q=80&w=1000&auto=format&fit=crop",
            "challenge": "Financial institutions need to balance loan approval speed with risk management. Manual review is slow and prone to human error.",
            "solution": "Developed a Decision Tree model to classify applicants based on credit history, income, and loan amount. Optimized for high accuracy in identifying eligible borrowers.",
            "result": "Achieved 93% accuracy in predicting loan eligibility, offering a blueprint for automated first-pass screening systems to speed up processing time."
        },
        {
            "id": 6,
            "title": "Jakarta Real Estate Forecasting",
            "subtitle": "Regression • Economic Trends • R² 93%",
            "desc": "Data-driven housing price prediction for the Jakarta region 2024 to aid investors and homebuyers.",
            "tech": "Python, Linear Regression, Statistical Analysis",
            "img": "https://images.unsplash.com/photo-1448630360428-65456885c650?q=80&w=1000&auto=format&fit=crop",
            "challenge": "Navigating the volatile Jakarta property market requires data-backed insights rather than speculation.",
            "solution": "Cleaned and modeled housing data using Linear Regression, focusing on feature selection (Location, Square Footage) to explain price variance.",
            "result": "Delivered a model with an R² score of 93%, indicating a very strong correlation between the selected features and market prices, useful for fair-value assessment."
        },
        {
            "id": 7,
            "title": "Restaurant Sales Patterns (Apriori)",
            "subtitle": "Market Basket Analysis • 500 Transactions",
            "desc": "Uncovering hidden product associations to drive cross-selling strategies in the food and beverage sector.",
            "tech": "Python, Apriori Algorithm, Association Rule Mining",
            "img": "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1000&auto=format&fit=crop",
            "challenge": "The restaurant wanted to increase the average order value (AOV) but didn't know which items were frequently bought together.",
            "solution": "Applied the Apriori algorithm to 500 transaction records to discover rules like 'If buying Item A, likely to buy Item B'.",
            "result": "Identified strong product pairings, enabling the creation of 'Combo Menu' recommendations that naturally encourage customers to order more items."
        },
        {
            "id": 8,
            "title": "Annual Consumer Behavior Dashboard",
            "subtitle": "Excel • Strategic Analytics • 3,900 Rows",
            "desc": "Interactive Excel dashboard analyzing purchasing patterns across 3,900 transactions to drive inventory decisions.",
            "tech": "Excel (Pivot Tables, Slicers, Charts)",
            "img": "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1000&auto=format&fit=crop",
            "challenge": "Client needed to optimize marketing spend but lacked visibility into which demographic segments were most profitable across different states.",
            "solution": "Built a dynamic dashboard enabling multi-variable filtering (Age, Gender, Location). Conducted descriptive statistical analysis to find correlations.",
            "result": "Discovered that Males aged 41-50 are the highest spending demographic. Identified 'Clothing' as a high-demand category in Montana/California."
        },
        {
            "id": 9,
            "title": "Customer Segmentation (K-Means)",
            "subtitle": "Python • Machine Learning • Clustering",
            "desc": "Unsupervised Learning project to segment mall customers into 5 distinct groups for hyper-personalized marketing.",
            "tech": "Python, Scikit-Learn, K-Means, Matplotlib",
            "img": "https://images.unsplash.com/photo-1556740758-90de374c12ad?q=80&w=1000&auto=format&fit=crop",
            "challenge": "Generic marketing blasts were yielding low conversion rates. Needed to differentiate between 'High Spenders' and 'Budget Shoppers'.",
            "solution": "Applied the Elbow Method to determine the optimal number of clusters (K=5) based on Annual Income vs. Spending Score. Removed outliers before training.",
            "result": "Identified a critical 'High Income, Low Spend' segment. Recommended a 'Value-Based Campaign' for this group to increase conversion."
        },
        {
            "id": 10,
            "title": "KPP Mining Mascot Design",
            "subtitle": "Brand Identity • Corporate Design",
            "desc": "Winner of KPP Mining Astra Mascot Design Competition. Combining corporate values with modern art.",
            "tech": "Adobe Illustrator, Branding Strategy",
            "img": "https://images.unsplash.com/photo-1626785774573-4b799314348d?q=80&w=1000&auto=format&fit=crop",
            "challenge": "Create a mascot that visually embodies 'Strength', 'Technology', and 'Future-Readiness' moving away from traditional industrial imagery.",
            "solution": "Designed a Robot-Themed Mascot utilizing the official corporate color palette, focusing on clean lines and futuristic aesthetics.",
            "result": "Selected as the 1st Place Winner from 50+ entries. The mascot was adopted for internal corporate communications."
        }
    ],
    "mlProjects": [],
    "certificates": [
        {
            "title": "SQL Query Optimization",
            "issuer": "Online Cert",
            "img": "https://images.unsplash.com/photo-1543286386-2e659306cd6c?q=80&w=1000&auto=format&fit=crop"
        },
        {
            "title": "Python Bootcamp",
            "issuer": "PPKD JakSel",
            "img": "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?q=80&w=1000&auto=format&fit=crop"
        },
        {
            "title": "Data Visualization",
            "issuer": "Workshop",
            "img": "https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=1000&auto=format&fit=crop"
        }
    ],
    "footer": {
        "copyright": "© 2026 Luqfi Anita Rahman. All rights reserved.",
        "linkedin": "#",
        "github": "#",
        "instagram": "#"
    }
};